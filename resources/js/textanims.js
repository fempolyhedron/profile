const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fonts = 
[
    "Bitcount Prop Single",
    "Jersey 10",
    "Wingdings",
    "JetBrains Mono",
    "Fuzzy Bubbles"
];

document.querySelectorAll(".textanim-fonttype").forEach(elem =>
{
    fonttype(elem);
});

document.querySelectorAll(".textanim-cursor").forEach(elem =>
{
    cursor(elem);
});

async function fonttype(elem)
{
    const txt = elem.innerHTML;

    while(true)
    {
        for(let i = 0; fonts.length > i; i++)
        {
            await wait(600);
            for (let i = txt.length; i >= 0; i--)
            {
                elem.innerHTML = txt.slice(0, i) + "<span style='font-family: Inter; color: #aaa;'>_</span>";
                await wait(100);
            }
            await wait(100);
            elem.style.fontFamily = '"' + fonts[i] + '"';
            await wait(100);
            for (let i = 0; txt.length >= i; i++)
            {
                elem.innerHTML = txt.slice(0, i) + "<span style='font-family: Inter; color: #aaa;'>_</span>";
                await wait(100);
            }
        }
    }
}

async function cursor(elem)
{
    const txt = elem.innerHTML;
    elem.innerHTML += `<span style="font-family: 'JetBrains Mono'; font-style: normal;">_</span>`;
    const cur = elem.querySelector("span");

    while(true)
    {
        cur.style.color = "";
        await wait(500);
        cur.style.color = "rgba(0,0,0,0)";
        await wait(500);
    }
}