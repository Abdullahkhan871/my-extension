chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "runOldAnimated") {
        runOldAnimated();
    }
        if (message.action === "runNewAnimated") {
        runNewAnimated();
    }
        if (message.action === "runNewStatic") {
        runNewStatic();
    }
});


function runOldAnimated() {
    console.log("✅ runOldAnimated Function triggered from popup");
    const btn160x600 = document.getElementById("160x600");
    const btn280x130 = document.getElementById("280x130");
    const btn300x100 = document.getElementById("300x100");
    const btn300x250 = document.getElementById("300x250");
    const btn300x50 = document.getElementById("300x50");
    const btn300x600 = document.getElementById("300x600");
    const btn320x100 = document.getElementById("320x100");
    const btn320x50 = document.getElementById("320x50");
    const btn468x60 = document.getElementById("468x60");
    const btn728x90 = document.getElementById("728x90");
    const btn960x250 = document.getElementById("960x250");
    const btn970x250 = document.getElementById("970x250");
    const btn320x520 = document.getElementById("320x520");
    const btn600x200 = document.getElementById("600x200");

    const sizes = [
        btn160x600,
        btn280x130,
        btn300x100,
        btn300x250,
        btn300x50,
        btn300x600,
        btn320x100,
        btn320x50,
        btn468x60,
        btn728x90,
        btn960x250,
        btn970x250,
        btn320x520,
        btn600x200
    ];

    if (sizes.length > 0) {
        sizes.forEach((btn) => {
            btn.click();
        })
    }
}
function runNewAnimated() {
        console.log("✅ runNewAnimated Function triggered from popup");
    const btn1200x600 = document.getElementById("1200x600");
    const btn1200x90 = document.getElementById("1200x90");
    const btn1200x250 = document.getElementById("1200x250");
    const btn970x90 = document.getElementById("970x90");
    const btn768x1024 = document.getElementById("768x1024");
    const btn1024x768 = document.getElementById("1024x768");
    const btn1280x720 = document.getElementById("1280x720");
    const btn600x800 = document.getElementById("600x800");
    const btn320x480 = document.getElementById("320x480");
    const btn480x320 = document.getElementById("480x320");
    const btn1280x960 = document.getElementById("1280x960");
    const btn1920x540 = document.getElementById("1920x540");
    const btn1440x1080 = document.getElementById("1440x1080");
    const btn960x1200 = document.getElementById("960x1200");

    const sizes = [
        btn1200x600,
        btn1200x90,
        btn1200x250,
        btn970x90,
        btn768x1024,
        btn1024x768,
        btn1280x720,
        btn600x800,
        btn320x480,
        btn480x320,
        btn1280x960,
        btn1920x540,
        btn1440x1080,
        btn960x1200
    ];
        if (sizes.length > 0) {
        sizes.forEach((btn) => {
            btn.click();
        })
    }
}
function runNewStatic() {
        console.log("✅ runNewStatic Function triggered from popup");
    const btn1200x600 = document.getElementById("1200x600");
    const btn1200x90 = document.getElementById("1200x90");
    const btn1200x250 = document.getElementById("1200x250");
    const btn970x90 = document.getElementById("970x90");
    const btn768x1024 = document.getElementById("768x1024");
    const btn1024x768 = document.getElementById("1024x768");
    const btn1280x720 = document.getElementById("1280x720");
    const btn600x800 = document.getElementById("600x800");
    const btn320x480 = document.getElementById("320x480");
    const btn480x320 = document.getElementById("480x320");
    const btn1280x960 = document.getElementById("1280x960");
    const btn1920x540 = document.getElementById("1920x540");
    const btn1440x1080 = document.getElementById("1440x1080");
    const btn960x1200 = document.getElementById("960x1200");
    const btnSelectAllSocial = document.getElementById("select-all-Social");

    const sizes = [
        btn1200x600,
        btn1200x90,
        btn1200x250,
        btn970x90,
        btn768x1024,
        btn1024x768,
        btn1280x720,
        btn600x800,
        btn320x480,
        btn480x320,
        btn1280x960,
        btn1920x540,
        btn1440x1080,
        btn960x1200,
        btnSelectAllSocial
    ];
        if (sizes.length > 0) {
        sizes.forEach((btn) => {
            btn.click();
        })
    }
}