//shitty ass music player ig /shrug/

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const playlist = [
    "RKQUblO-iCs",
    "Zm_-c8DwLes",
    "7f1RK1m7qvc",
    "XxAzbt1eS5M",
    "N117e1Ub39A",
    "OobVFldn6As",
    "85WD93lz5GU",
    "Jm3AM-sAbmA",
    "FtutLA63Cp8",
    "UTcZHzDY3LU",
    "NA3MJmcyPpE",
    "WO12CVtRIJU",
    "FftLImzl1-k"
];

const playlist_titles = [
    "My Castle Town",
    "Until Next Time",
    "The Third Sancturary",
    "Rude Buster",
    "Ruder Buster",
    "From Now On (Battle 2)",
    "Raise Up Your Bat",
    "You Can Always Come Home",
    "Bad Apple!! feat. nomico",
    "Affection Addiction <span style=\"font-size:0.7em\"> ft. </span>POPY",
    "Water The Roses <span style=\"font-size:0.7em\"> ft. </span> GUMI",
    "Aero Era / Aluuna (<span style=\"font-size:0.7em\">feat. </span> GUMI)",
    "I Wish That I Could Fall (<span style=\"font-size:0.7em\">feat. </span> GUMI SV)"
];

const playlist_authors = [
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "Toby \"Radiation\" Fox",
    "ZUN, Masayoshi Minoshima",
    "KAT, Aku P",
    "FLAVOR FOLEY",
    "Aluuna",
    "JamieP"
];

const playlist_from = [
    "DELTARUNE - Ch2",
    "DELTARUNE - Ch2",
    "DELTARUNE - Ch3/4",
    "DELTARUNE - Ch1",
    "DELTARUNE - Ch3/4",
    "DELTARUNE - Ch3/4",
    "DELTARUNE - Ch3/4",
    "DELTARUNE - Ch2",
    "Touhou Project - Touhou 4",
    "Affection Addiction",
    "Water The Roses",
    "Aero Era",
    "I Wish That I Could Fall"
];

const playlist_ident = [
    "OST39",
    "OST3",
    "OST45",
    "OST63",
    "OST10",
    "OST11",
    "OST30",
    "OST20",
    "1",
    "1",
    "1",
    "1",
    "1"
];

const playlist_bg = [
    [ false, "deltarune"],
    [ false, "deltarune"],
    [ false, "deltarune"],
    [ false, "encounter" ],
    [ false, "encounter" ],
    [ false, "encounter" ],
    [ true, "ost20_lyrical_no_vocals_ch3_lightners_live.mp4" ],
    [ false, "deltarune"],
    [ true, "bad_apple.mp4"],
    [ true, "kat_x_aku_p_affection_addiction_ft_POPY.mp4" ],
    [ true, "water_the_roses_ft_GUMI_flavor_foley.mp4"],
    [ true, "aero_era_aluuna_feat_GUMI_SV.mp4" ],
    [ true, "i_wish_that_i_could_fall_JamieP.mp4" ]
];

const playlist_m_details = [
    "4/4 | Dmaj ionian",
    "3/4 | Fmaj ionian",
    "4/4 | C#min",
    "9/4, 11/8 | D#min aeolian",
    "4/4 | Gmin dorian",
    "4/4 | Gmin dorian",
    "4/4 | Emaj ionian",
    "4/4 | D#min",
    "4/4 | Amin ionian",
    "4/4 | Gmin ionian",
    "12/8 | Emaj ionian",
    "uhh uhm... ill figure it out<br>after i arrange",
    "4/4 | Emaj ionian"
];

let index = playlist.length - 1;
let ytplayer = null;
let progbar = null;

let mute = false;
const t_vol = 60;
const quant = 50;
let repeat = false;

function next_song()
{
    clearInterval(progbar);
    index = (index + 1) % playlist.length;
    create_player(playlist[index]);
}

function last_song()
{
    clearInterval(progbar);
    index = (index - 1 + playlist.length) % playlist.length;
    create_player(playlist[index]);
}

function proceed(event)
{
    if (event.code === "KeyZ" || event.code === "Enter")
    {
        create_player(playlist[index]);
        document.getElementById("anykey").classList.add('fade');
        setTimeout(() =>
        {
            document.getElementById("anykey").remove();
        }, 1000);
        document.removeEventListener("keyup", proceed);
        document.removeEventListener("click", proceedClick);
    }
}

function proceedClick(event)
{
    create_player(playlist[index]);
    document.getElementById("anykey").classList.add('fade');
    setTimeout(() =>
    {
        document.getElementById("anykey").remove();
    }, 1000);
    document.removeEventListener("keyup", proceed);
    document.removeEventListener("click", proceedClick);
}

document.addEventListener("keyup", proceed);
document.addEventListener("click", proceedClick);

function interact(event)
{
    if (event.code === "KeyR")
    {
        index = Math.floor(Math.random() * (playlist.length));
        create_player(playlist[index])
    }
}

document.addEventListener("keyup", interact);

let dragging = false;
let offsetX, offsetY;

document.getElementById("mplayer").addEventListener("pointerdown", e =>
{
    dragging = true;
    let rect = document.getElementById("mplayer").getBoundingClientRect();
    offsetX = window.innerWidth - e.clientX - (window.innerWidth - rect.right);
    offsetY = window.innerHeight - e.clientY - (window.innerHeight - rect.bottom);

    document.getElementById("mplayer").style.cursor = "grabbing";
});

document.addEventListener("pointermove", e =>
{
    if (!dragging) return;
    let right = window.innerWidth - e.clientX - offsetX;
    let bottom = window.innerHeight - e.clientY - offsetY;

    document.getElementById("mplayer").style.right = right + "px";
    document.getElementById("mplayer").style.bottom = bottom + "px";
});

document.addEventListener("pointerup", () =>
{
    dragging = false;
    document.getElementById("mplayer").style.cursor = "grab";
});

function create_player(videoId)
{
    clearInterval(progbar);

    if (ytplayer && typeof ytplayer.destroy === "function")
    {
        try { ytplayer.destroy(); } catch (_) {}
        ytplayer = null;
    }
    setTimeout(() =>
    {
        const container = document.getElementById("ytplayer_container");
        const oldFrame = container.querySelector("iframe");
        if (oldFrame) oldFrame.remove();

        ytplayer = new YT.Player("ytplayer", {
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                modestbranding: 1,
                disablekb: 1,
                playsinline: 1,
                origin: window.location.origin
            },
            events: {
                onReady: (e) =>
                {
                    if(playlist_bg[index][0])
                    {
                        const vbg = document.querySelector(".video-bg");
                        const bgvid = document.getElementById("bgvid");
                        document.getElementsByTagName("body")[0].classList.forEach(classI =>
                        {
                            if ((/^bg_.*/).test(classI))
                            {
                                document.getElementsByTagName("body")[0].classList.remove(classI);
                            }
                        });
                        document.getElementsByTagName("body")[0].classList.add("bg_:empty");
                        vbg.classList.remove("vbg-hide");
                        bgvid.src = `assets/${playlist_bg[index][1]}`;
                        bgvid.load();
                        bgvid.addEventListener("canplay", () =>
                        {
                            bgvid.currentTime = ytplayer.getCurrentTime();
                            bgvid.play().catch(() => {});
                        })
                    }
                    else
                    {
                        const vbg = document.querySelector(".video-bg");
                        const bgvid = document.getElementById("bgvid");
                        vbg.classList.add("vbg-hide");
                        bgvid.pause();
                        bgvid.src = "";
                        document.getElementsByTagName("body")[0].classList.forEach(classI =>
                        {
                            if ((/^bg_.*/).test(classI))
                            {
                                document.getElementsByTagName("body")[0].classList.remove(classI);
                            }
                        });
                        document.getElementsByTagName("body")[0].classList.add(`bg_${playlist_bg[index][1]}`);
                    }

                    e.target.mute();
                    e.target.playVideo();
                    if (!mute)
                    {
                        try
                        {
                            e.target.unMute();
                            _vol(e.target, t_vol, quant);
                        } catch (_) {}
                        console.log("not muted");
                    }
                    else
                    {
                        e.target.setVolume(0);
                        e.target.mute();
                        console.log("muted");
                    }

                    _prog_reset();
                    _prog_bar();
                },
                onStateChange: (e) =>
                {
                    if (e.data === YT.PlayerState.PLAYING)
                    {
                        document.getElementById("pause").innerHTML = `<i class="fa-solid fa-pause"></i>`;
                    }
                    if (e.data === YT.PlayerState.ENDED)
                    {
                        _prog_end();
                        clearInterval(progbar);
                        index = repeat ? index : (index + 1) % playlist.length;
                        create_player(playlist[index]);
                    }
                }
            }
        });
    }, 100);

    document.getElementById("mplayer-title").innerHTML = `${playlist_titles[index]}`;
    document.getElementById("mplayer-from").innerHTML = playlist_ident[index] == "NIL" ? playlist_from[index] : `<span style="color: cyan;">${playlist_ident[index]}</span>  •  ${playlist_from[index]}`;
    document.getElementById("mplayer-detail-m").innerHTML = playlist_m_details[index] ? playlist_m_details[index] : document.getElementById("mplayer-detail-m").innerHTML
    document.getElementById("mplayer-artist").innerHTML = playlist_authors[index] ? playlist_authors[index] : document.getElementById("mplayer-artist").innerHTML
}

function _vol(player, target, duration)
{
    const steps = 20;
    const stepTime = duration / steps;
    let currentVol = 0;
    player.setVolume(0);
    const interval = setInterval(() =>
    {
        currentVol += target / steps;
        player.setVolume(Math.min(currentVol, target));
        if (currentVol >= target) clearInterval(interval);
    }, stepTime);
}

function _pause()
{
    const vbg = document.querySelector(".video-bg");
    const bgvid = document.getElementById("bgvid");

    if (vbg && !vbg.classList.contains("vbg-hide") && bgvid)
    {
        if (bgvid.paused) bgvid.play();
        else bgvid.pause();
    }

    if (!ytplayer) return;
    const state = ytplayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING)
    {
        ytplayer.pauseVideo();
        document.getElementById("pause").innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    else if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.CUED)
    {
        ytplayer.playVideo();
        document.getElementById("pause").innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}

function seek_rel(offset)
{
    const vbg = document.querySelector(".video-bg");
    const bgvid = document.getElementById("bgvid");

    if (vbg && !vbg.classList.contains("vbg-hide") && bgvid)
    {
        try
        {
            bgvid.currentTime = Math.max(0, Math.min(bgvid.duration, bgvid.currentTime + offset));
        } catch (_) {}
    }

    if (!ytplayer) return;
    try
    {
        const pos = ytplayer.getCurrentTime();
        const dur = ytplayer.getDuration() || 0;
        const next = Math.max(0, Math.min(dur, pos + offset));
        ytplayer.seekTo(next, true);
    } catch (_) {}
}

function _mute()
{
    if (!ytplayer) return;
    document.getElementById("mute").innerHTML = ytplayer.isMuted() ? `<i class="fa-solid fa-volume-high"></i>` : `<i class="fa-solid fa-volume-xmark"></i>`;
    ytplayer.isMuted() ? ytplayer.unMute() : ytplayer.mute();
    mute = !ytplayer.isMuted();
}

function _repeat()
{
    repeat = !repeat;
    document.getElementById("repeat").innerHTML = repeat ? `<i class="fa-solid fa-repeat"></i>` : `<span style="position:relative;display:inline-block;"><i class="fa-solid fa-repeat"></i><i class="fa-solid fa-slash" style="position:absolute;left:0;top:0;"></i></span>`;
}

function _prog_reset()
{
    const bar = document.getElementById("progress_bar");
    if (bar) bar.style.width = "0%";
}

function _prog_bar()
{
    const bar = document.getElementById(":bar");
    clearInterval(progbar);
    progbar = setInterval(() =>
    {
        if (!ytplayer) return;
        const dur = ytplayer.getDuration();
        if (!dur || !isFinite(dur)) return;
        const cur = ytplayer.getCurrentTime();
        const effectiveDur = dur * 0.985;
        let pct = (cur / effectiveDur) * 100;
        if (pct > 100) pct = 100;
        bar.style.width = pct + "%";
    }, 100);
}

function _prog_end()
{
    const bar = document.getElementById("progress_bar");
    if (bar) bar.style.width = "100%";
}

function seek_to_click(event)
{
    const vbg = document.querySelector(".video-bg");
    const bgvid = document.getElementById("bgvid");
    const container = document.getElementById(":prog");
    const rect = container.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width || 1;
    const pct = clickX / width;

    if (vbg && !vbg.classList.contains("vbg-hide") && bgvid)
    {
        try
        {
            bgvid.currentTime = bgvid.duration * pct;
        } catch (_) {}
    }

    if (!ytplayer) return;
    const dur = ytplayer.getDuration();
    if (!dur || !isFinite(dur)) return;
    ytplayer.seekTo(dur * pct, true);
}

document.addEventListener("visibilitychange", () =>
{
    if (!document.hidden && ytplayer)
    {
        const bgvid = document.getElementById("bgvid");

        if (bgvid)
        {
            bgvid.currentTime = ytplayer.getCurrentTime();
            bgvid.paused = ytplayer.paused;
        }
    }
});
