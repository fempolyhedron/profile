const routes = {
    index: () => `
        <div class="hero">
            <img src="assets/pfp/discord.png" alt="Profile Picture" width="200em" style="border-radius: 50%;"/>
            <br>
            <div class="title cool_hover_1">hai :3</div>
            <div class="subtitle">im a korean programmer, composer, producer, and editor<!--, and animator--></div>
            <div class="mt-4">
                <a class="btn btn-primary" href="#proj">projects</a>
                <a class="btn btn-primary" href="#disk">music</a>
                <a class="btn btn-primary" href="#out">other</a>
            </div>
        </div>
        
        <div class="row">
            <div class="col-8">
                <h2 class="cool_hover_1">About</h2>
                <p class="lead">hi there! im a korean dev who also makes music and shit<br>i also edit videos for others<br><br>as you can see my favourite game is DELTARUNE, next to Minecraft</p>
                <div class="hr mb-4"></div>
                <p class="lead">my hobbies are coding, playing DELTARUNE, playing the guitar, playing the piano, and music production</p>
                <div class="hr mb-4"></div>
                <p class="lead">specs<br>NVIDIA GeForce RTX 3060<br>AMD Ryzen 7 6800H with Radeon Graphics<br>48GB RAM<br>Transcend MTE115S 1TB NVMe SSD<br>Samsung PM991a 1TB M.2 NVMe SSD<br><br>gear:<br>Yamaha MX61 Synth<br>Yamaha MG06 6-Channel Analog Mixer</p>
            </div>
            <div class="col-4">
                <div class="card">
                <h3 class="cool_hover_1">i can code in...</h3>
                    <div class="mb-2" style="display:flex; flex-wrap:wrap; gap:10px;"><span class="chip cool_hover_1">C#</span> <span class="chip cool_hover_1">JS (Full Stack)</span> <span class="chip cool_hover_1">Java</span> <span class="chip cool_hover_1">Luau</span> <span class="chip cool_hover_1">C/C++</span> <span class="chip cool_hover_1">VB.NET</span> <span class="chip cool_hover_1">Assembly</span> <span class="chip cool_hover_1">Python</span> <span class="chip cool_hover_1">Minecraft Datapacks</span></div>
                </div>
                <div class="hr mb-4"></div>
                <div class="card">
                <h3 class="cool_hover_1">games i like...</h3><div class="mb-2" style="display:flex; flex-wrap:wrap; gap:10px;"><span class="chip cool_hover_1">DELTARUNE</span> <span class="chip cool_hover_1">UNDERTALE</span> <span class="chip cool_hover_1">Minecraft</span> <span class="chip cool_hover_1">KSP</span> <span class="chip cool_hover_1">Cities: Skylines</span> <span class="chip cool_hover_1">DCS</span> <span class="chip cool_hover_1">robloc RIVALS</span></div>
                </div>
                <div class="hr mb-4"></div>
            </div>
        </div>
    `,
    proj: () => `
        <div class="mb-4">
            <h2 class="cool_hover_1">Projects</h2>
            <p class="text-muted">list of solo public coding projects</p>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <h3 class="cool_hover_1">no <i>public</i> projects... yet</h3>
                </div>
            </div>
        </div>
    `,
    disk: () => `
        <div class="mb-4">
            <h2 class="cool_hover_1">music :3</h2>
            <p class="text-muted">guitar, pno, arrangements, production, etc</p>
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
            <p class="lead">my socials</p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card center">
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://discord.com/users/992955930599764060"><i style="font-size: 3em" class="cool_hover_1 fa-brands fa-discord"></i></a>
                    </div>
                    <p><h3 class="cool_hover_1">Discord</h3> <span class="text-muted">@elephant_lover</span></p>
                </div>
            </div>
            <div class="col-4">
                <div class="card center">
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://github.com/FemboyPolyhedron"><i style="font-size: 3em" class="cool_hover_1 fa-brands fa-github"></i></a>
                    </div>
                    <p><h3 class="cool_hover_1">GitHub</h3> <span class="text-muted">@FemboyPolyhedron</span></p>
                </div>
            </div>
            <div class="col-4">
                <div class="card center">
                    
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://www.youtube.com/@FemboyPolyhedron"><i style="font-size: 3em" class="cool_hover_1 fa-brands fa-youtube"></i></a>
                    </div>
                    <p><h3 class="cool_hover_1">YouTube</h3> <span class="text-muted">@FemboyPolyhedron</span></p>
                    <img src="https://img.shields.io/youtube/channel/subscribers/UCvz5BaN9tm7j5odaqZ9otjQ?style=plastic&label=subs%3A&labelColor=%237aa2ff&color=%237aa2ff  ">
                </div>
            </div>
        </div>
        <div class="hr mb-4"></div> 
        <div class="mb-4">
            <h2 class="cool_hover_1">commissioning</h2>
            <p class="lead"><b>pricing</b><br>price upon request.<br><br><b>i do:</b><br>robloc scripting<br>gui design<br>editing<br><br><b>how to commission</b><br>dm me your request and offer and ill get to you</p>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="card center">         
                    <div class="card center">
                    <div class="social_pfp_wrap">
                        <a target="_blank" href="https://discord.com/users/992955930599764060"><i style="font-size: 3em" class="cool_hover_1 fa-brands fa-discord"></i></a>
                    </div>
                    <p><h3 class="cool_hover_1">Discord</h3> <span class="text-muted">@elephant_lover</span></p>
                </div>
            </div>
        </div>
    `
};

function build_page(){
    const app=document.getElementById('app');
    const page=get_route();
    app.innerHTML=routes[page]();
    set_active_nav(page);
    wire_cool_hover_motion(app);
    wire_cool_hover_motion2(app);
}

function get_route(){
    const hash=(location.hash||'#index').replace('#','').trim();
    return routes[hash]?hash:'index';
}

function set_active_nav(route_key){
    document.querySelectorAll('#nav a').forEach(a=>{
        if(a.dataset.route===route_key)a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
    });
}

function wire_cool_hover_motion(root){
    const els=root.querySelectorAll('.cool_hover_1');
    els.forEach(el=>{
        let rect=null;
        function update_rect(){rect=el.getBoundingClientRect();}
        function enter(){update_rect();el.style.setProperty('--scale','1.06');}
        function move(e){
            if(!rect)update_rect();
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const dx=(e.clientX-cx)/(rect.width/2), dy=(e.clientY-cy)/(rect.height/2);
            const tX=Math.max(-1,Math.min(1,dx))*6, tY=Math.max(-1,Math.min(1,dy))*6;
            el.style.setProperty('--tx',`${tX.toFixed(2)}px`);
            el.style.setProperty('--ty',`${tY.toFixed(2)}px`);
        }
        function leave(){
            el.style.removeProperty('--tx');el.style.removeProperty('--ty');el.style.removeProperty('--scale');
        }
        el.addEventListener('mouseenter',enter);
        el.addEventListener('mousemove',move);
        el.addEventListener('mouseleave',leave);
        window.addEventListener('scroll',()=>{rect=null;},{passive:true});
        window.addEventListener('resize',()=>{rect=null;});
    });
}

function wire_cool_hover_motion2(root){
    const els=root.querySelectorAll('.lead');
    els.forEach(el=>{
        let rect=null;
        function update_rect(){rect=el.getBoundingClientRect();}
        function enter(){update_rect();el.style.setProperty('--scale','1.01');}
        function move(e){
            if(!rect)update_rect();
            const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
            const dx=(e.clientX-cx)/(rect.width/2), dy=(e.clientY-cy)/(rect.height/2);
            const tX=Math.max(-1,Math.min(1,dx))*6, tY=Math.max(-1,Math.min(1,dy))*6;
            el.style.setProperty('--tx',`${tX.toFixed(2)}px`);
            el.style.setProperty('--ty',`${tY.toFixed(2)}px`);
        }
        function leave(){
            el.style.removeProperty('--tx');el.style.removeProperty('--ty');el.style.removeProperty('--scale');
        }
        el.addEventListener('mouseenter',enter);
        el.addEventListener('mousemove',move);
        el.addEventListener('mouseleave',leave);
        window.addEventListener('scroll',()=>{rect=null;},{passive:true});
        window.addEventListener('resize',()=>{rect=null;});
    });
}

function init_year(){
    const y=document.getElementById('year');
    if(y)y.textContent=new Date().getFullYear();
}

window.addEventListener('hashchange',build_page);
window.addEventListener('DOMContentLoaded',()=>{init_year();build_page();});

async function title() {
    const tip = ":3 silly femboy ".split("");
    let i = 0
    let back = false;
    while(true) {
        if(i < tip.length) {
            const looped = tip.concat(tip.slice(0, tip.length));
            document.title = looped.slice(i, i + tip.length).join("");
        }
        i = (i + 1) % (tip.length  + 10);
        await new Promise(r => setTimeout(r, 300));
    }
}

title()

//easter egg

function interactStop(event) {
    if (event.code === "KeyZ" || event.code === "Enter") {
        //positive
    }
    if (event.code === "KeyX" || event.code === "Shift") {
        //negative
    } 
    if (event.code === "KeyC" || event.code === "CtrlLeft") {
        //neutral
    }
}

function interactStart(event) {
    if (event.code === "KeyZ" || event.code === "Enter") {
        //positive
    }
    if (event.code === "KeyX" || event.code === "Shift") {
        //negative
    } 
    if (event.code === "KeyC" || event.code === "CtrlLeft") {
        //neutral
    }
}

document.addEventListener("keydown", interactStart);
document.addEventListener("keyup", interactStop);

