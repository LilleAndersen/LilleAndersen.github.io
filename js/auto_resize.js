// Resize iframes when loading
function resize()
{
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++)
    {
        console.log(iframes[i].offsetWidth);
        iframes[i].style.height = iframes[i].offsetWidth / 16 * 9 + "px";
    }
};

// Resize iframes on window resize
$(window).on('resize',function ()
{
    resize()
});
