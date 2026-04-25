const routes = {
    index: () => `
        <div class="hero">
            <img src="assets/pfp/pfp.png" alt="kris deltarune" width="200em" height="200cm" style="border-radius: 50%; object-fit: cover;"/>
            <br>
            <div class="title cool_hover_1">hai :3</div>
            <div class="subtitle cool_hover_1">im a transfem korean programmer, composer, producer, ui desginer, slowrunner and editor, and (beginner) animator</div>
            <div class="mt-4">
                <a class="btn btn-primary cool_hover_2" href="#proj">projects</a>
                <a class="btn btn-primary cool_hover_2" href="#disk">music</a>
                <a class="btn btn-primary cool_hover_2" href="#out">other</a>
            </div>
        </div>
        
        <div class="row">
            <div class="col-8">
                <div class="card cool_hover_1" style="height: 80px;"><h2>about</h2></div>
                <p class="lead cool_hover_1">hi there! im a transfem korean dev who also makes music and shit.<br>as i am a transfem leaning non-binary, my pronouns are she/her or they/them, i prefer she/her but you can use they/them</p>
                <div class="hr mb-4"></div>

                <p class="lead cool_hover_1">my skills:<br>
                    programming, guitar, piano, making music (producing), some art, graphics design, UI design/implementation, make cpu go boom boom
                </p>

                <div class="hr mb-4"></div>

                <div class="card cool_hover_1" style="height: 80px;"><h2>qna</h2></div>
                <p class="lead cool_hover_1">
                    <span class="question">favourite coding langauge?</span><br>
                    C#, C/C++, java, in that order<br>
                    <br>

                    <span class="question">timezone?</span><br>
                    utc+9<br>
                    <br>

                    <span class="question">favourite voicebank?</span><br>
                    gumi<br>
                    <br>

                    <span class="question">favourite IDE/Text Editor?</span><br>
                    JetBrains Rider<br>
                    <br>

                    <span class="question">favourite vsynth song?</span><br>
                    currently, I Wish That I Could Fall ft. GUMI SV (by <a href="https://www.youtube.com/channel/UCDsaRDKTCsGBJMUKx-KtukA">JamieP</a>), but i also like Aero Era ft. GUMI SV (by <a href="https://www.youtube.com/@Aluunamusic">Aluuna</a>)<br>
                    <br>

                    <span class="question">do you like trains?</span><br>
                    HELL YEAH<br>
                    <br>

                    <span class="question">fsiq?</span><br>
                    101<br>
                    <br>

                    <span class="question">what mental debuffs (disorders) do you have <i class="em em-sob" aria-role="presentation" aria-label="SOBBING FACE"></i></span><br>
                    Mild ADHD, DMDD (Disruptive Mood Dysregulation Disorder), MDD (Major Depressive Disorder, Depression), GD (Gender Dysphoria)<br>
                    <br>
                </p>

                <div class="hr mb-4"></div>
                
                <div class="card cool_hover_1" style="height: 70px;"><h3>specs</h3></div><p class="lead cool_hover_1">
                <br>NVIDIA GeForce RTX 3060<br>AMD Ryzen 7 6800H with Radeon Graphics<br>16GB ECC DDR5 RAM<br>32GB ECC DDR5 RAM<br>Transcend MTE115S 1TB NVMe SSD<br>Samsung PM991a 1TB M.2 NVMe SSD<br><br>
                <div class="card cool_hover_1" style="height: 70px;"><h3>gear</h3></div><p class="lead cool_hover_1">
                <br>Yamaha MX61 Synth<br>Yamaha MG06 6-Channel Analog Mixer<br><br>
                <div class="card cool_hover_1" style="height: 70px;"><h3>software</h3></div><p class="lead cool_hover_1">
                <br>FL Studio (Music)<br>VSCode (java, c/c++, and web ide)<br>Visual Studio (.net ide)<br>Unity (engine)<br>DaVinci Resolve (editing)<br>Blender (animation)<br>Chrome (web browser because fuck "opera gx")</p>
            </div>
            <div class="col-4">
                <div class="card"><div class="card cool_hover_1" style="height: 70px;"><h3>i can code in...</h3></div><br>
                    <p class="muted">(sorted by fluency)</p>
                    <div class="mb-2" style="display:flex; flex-wrap:wrap; gap:10px;">
                        <span class="chip cool_hover_1">C#</span>
                        <span class="chip cool_hover_1">C/C++ (GNU, not MSVC)</span>
                        <span class="chip cool_hover_1">Java</span>
                        <span class="chip cool_hover_1">Luau</span>
                        <span class="chip cool_hover_1">JS (Full Stack)</span>
                        <span class="chip cool_hover_1">GML (Gamemaker Lang)</span>
                        <span class="chip cool_hover_1">Minecraft Datapacks/Commands</span>
                        <span class="chip cool_hover_1">VB.NET (Excel)</span>
                        <span class="chip cool_hover_1">Shell/Bash</span>
                        <span class="chip cool_hover_1">NASM Assembly (x86) (only abit)</span>
                    </div>
                </div>
                <div class="hr mb-4"></div>
                <div class="card"><div class="card cool_hover_1" style="height: 70px;"><h3>games i like...</h3></div><br>
                    <div class="mb-2" style="display:flex; flex-wrap:wrap; gap:10px;"> <span class="chip cool_hover_1">KSP</span> <span class="chip cool_hover_1">Minecraft</span> <span class="chip cool_hover_1">DELTARUNE</span> <span class="chip cool_hover_1">Geometry Dash</span> <span class="chip cool_hover_1">Subnautica</span> <span class="chip cool_hover_1">TF2</span> <span class="chip cool_hover_1">UNDERTALE</span> <span class="chip cool_hover_1">Cities: Skylines</span> <span class="chip cool_hover_1">DCS</span> </div>
                </div>
                <div class="hr mb-4"></div>
            </div>
        </div>
    `,
    proj: () => `
        <div class="mb-4">
            <h2 class="cool_hover_1">Projects</h2>
            <p class="text-muted cool_hover_1">list of projects im involved as of now</p>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <h3 class="cool_hover_1">parabellum</h3><br>
                    scripter, composer, gui desginer<br><br>
                    a roblox extraction shooter
                </div>
                <div class="hr mb-4"></div>
                <div class="card">
                    <h3 class="cool_hover_1">vertexigon</h3><br>
                    <creator<br><br>
                    a side project. deltarune modding tool
                </div>
                <div class="hr mb-4"></div>
                <div class="card">
                    <h3 class="cool_hover_1">fourtitude</h3><br>
                    creator<br><br>
                    ANOTHER sideproject. shitty ass UI framework
                </div>
            </div>
        </div>
    `,
    disk: () => `
        <div class="mb-4">
            <h2 class="cool_hover_1">music :3</h2>
            <p class="text-muted cool_hover_1">guitar, pno, arrangements, production, etc</p>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <h3 class="cool_hover_1">coming soon</h3>
                </div>
            </div>
        </div>
    `,
    out: () => `
        <div class="mb-4">
            <h2 class="cool_hover_1">connections</h2>
            <p class="lead cool_hover_1">my socials</p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card center cool_hover_1">
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://discord.com/users/992955930599764060"><i style="font-size: 3em; cursor: pointer;" class="cool_hover_1 fa-brands fa-discord"></i></a>
                    </div>
                    <p><h3 style="text-align:left;">Discord</h3> <span class="text-muted">@elephant_lover</span></p>
                </div>
            </div>
            <div class="col-4">
                <div class="card center cool_hover_1">
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://github.com/FemboyPolyhedron"><i style="font-size: 3em; cursor: pointer;" class="cool_hover_1 fa-brands fa-github"></i></a>
                    </div>
                    <p><h3 style="text-align:left;">GitHub</h3> <span class="text-muted">@FemboyPolyhedron</span></p>
                </div>
            </div>
            <div class="col-4"> 
                <div class="card center cool_hover_1">
                    
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://www.youtube.com/@FemboyPolyhedron"><i style="font-size: 3em; cursor: pointer;" class="cool_hover_1 fa-brands fa-youtube"></i></a>
                    </div>
                    <p><h3 style="text-align:left;">YouTube</h3> <span class="text-muted">@FemboyPolyhedron</span></p>
                    <img src="https://img.shields.io/youtube/channel/subscribers/UCvz5BaN9tm7j5odaqZ9otjQ?style=plastic&label=subs%3A&labelColor=%237aa2ff&color=%237aa2ff  ">
                </div>
            </div>
        </div>
        <div class="hr mb-4"></div> 
        <div class="mb-4">
            <h2 class="cool_hover_1">commissioning</h2>
            <p class="lead cool_hover_1"><b>pricing</b><br>price upon request.<br><br><b>i do:</b><br>robloc scripting<br>gui design<br>editing<br><br><b>how to commission</b><br>dm me your request and offer and ill get to you</p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card center cool_hover_1"> 
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://discord.com/users/992955930599764060"><i style="font-size: 3em; cursor: pointer;" class="cool_hover_1 fa-brands fa-discord"></i></a>
                    </div>
                    <p><h3 style="text-align:left;">Discord</h3> <span class="text-muted">@elephant_lover</span></p>
                </div>
            </div>
        </div>
    `
};

function build_page()
{
    const app=document.getElementById('app');
    const page=get_route();
    app.innerHTML=routes[page]();
    set_active_nav(page);
    _cool_hover_1(document.body);
    _cool_hover_2(document.body);
}

function get_route()
{
    const hash=(location.hash||'#index').replace('#','').trim();
    return routes[hash]?hash:'index';
}

function set_active_nav(route_key)
{
    document.querySelectorAll('#nav a').forEach(a =>
    {
        if(a.dataset.route === route_key) a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
    });
}

function _cool_hover_1(root)
{
    const els = root.querySelectorAll('.cool_hover_1');
    els.forEach(el =>
    {
        let rect = null;

        function update_rect()
        {
            rect = el.getBoundingClientRect();
        }

        function enter(e)
        {
            update_rect();
            el.style.setProperty('--scale','1.03');
            if(!rect)update_rect();
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const dx=(e.clientX-cx)/(rect.width/2), dy=(e.clientY-cy)/(rect.height/2);
            const tX=Math.max(-1,Math.min(1,dx))*6, tY=Math.max(-1,Math.min(1,dy))*6;
            el.style.setProperty('--tx',`${tX.toFixed(2)}px`);
            el.style.setProperty('--ty',`${tY.toFixed(2)}px`);
        }

        function move(e)
        {
            if(!rect)update_rect();
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const dx=(e.clientX-cx)/(rect.width/2), dy=(e.clientY-cy)/(rect.height/2);
            const tX=Math.max(-1,Math.min(1,dx))*6, tY=Math.max(-1,Math.min(1,dy))*6;
            el.style.setProperty('--tx',`${tX.toFixed(2)}px`);
            el.style.setProperty('--ty',`${tY.toFixed(2)}px`);
        }

        function leave()
        {
            el.style.removeProperty('--tx');
            el.style.removeProperty('--ty');
            el.style.removeProperty('--scale');
        }

        el.addEventListener('mouseenter',enter);
        el.addEventListener('mousemove',move);
        el.addEventListener('mouseleave',leave);
        window.addEventListener('scroll',()=>{rect=null;},{passive:true});
        window.addEventListener('resize',()=>{rect=null;});
    });
}

function _cool_hover_2(root)
{
    const els = root.querySelectorAll('.cool_hover_2');
    els.forEach(el =>
    {
        let rect = null;

        function update_rect()
        {
            rect = el.getBoundingClientRect();
        }

        function enter(e)
        {
            update_rect();
            el.style.setProperty('--scale','1.07');
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const pctX=Math.max(-1,Math.min(1,(e.clientX-cx)/(rect.width/2)));
            const pctY=Math.max(-1,Math.min(1,(e.clientY-cy)/(rect.height/2)));
            el.style.setProperty('--trotx',`${(pctY*50).toFixed(2)}deg`);
            el.style.setProperty('--troty',`${(pctX*50).toFixed(2)}deg`);
        }

        function move(e)
        {
            if(!rect)update_rect();
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const pctX=Math.max(-1,Math.min(1,(e.clientX-cx)/(rect.width/2)));
            const pctY=Math.max(-1,Math.min(1,(e.clientY-cy)/(rect.height/2)));
            el.style.setProperty('--trotx',`${(pctY*50).toFixed(2)}deg`);
            el.style.setProperty('--troty',`${(pctX*50).toFixed(2)}deg`);
        }

        function leave()
        {
            el.style.removeProperty('--trotx');
            el.style.removeProperty('--troty');
            el.style.removeProperty('--scale');
        }

        el.addEventListener('mouseenter',enter);
        el.addEventListener('mousemove',move);
        el.addEventListener('mouseleave',leave);
        window.addEventListener('scroll',()=>{rect=null;},{passive:true});
        window.addEventListener('resize',()=>{rect=null;});
    });
}

function init_year()
{
    const y = document.getElementById('year');
    if(y) y.textContent=new Date().getFullYear();
}

window.addEventListener('hashchange',build_page);
window.addEventListener('DOMContentLoaded',()=>{init_year();build_page();});

async function title()
{
    const tip = ":3 silly girl ".split("");
    let i = 0
    let back = false;
    while(true)
    {
        if(i < tip.length)
        {
            const looped = tip.concat(tip.slice(0, tip.length));
            document.title = looped.slice(i, i + tip.length).join("");
        }
        i = (i + 1) % (tip.length  + 10);
        await new Promise(r => setTimeout(r, 300));
    }
}

title()