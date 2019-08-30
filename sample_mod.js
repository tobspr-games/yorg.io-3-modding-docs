/*

This is a very simple mod demonstration

*/


// Its most convenient to have your resources encoded as base64 directly here
const heartImage = new Image();
heartImage.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRDc1QTRBOyIgZD0iTTI0Ljg1LDEwLjEyNmMyLjAxOC00Ljc4Myw2LjYyOC04LjEyNSwxMS45OS04LjEyNWM3LjIyMywwLDEyLjQyNSw2LjE3OSwxMy4wNzksMTMuNTQzICBjMCwwLDAuMzUzLDEuODI4LTAuNDI0LDUuMTE5Yy0xLjA1OCw0LjQ4Mi0zLjU0NSw4LjQ2NC02Ljg5OCwxMS41MDNMMjQuODUsNDhMNy40MDIsMzIuMTY1Yy0zLjM1My0zLjAzOC01Ljg0LTcuMDIxLTYuODk4LTExLjUwMyAgYy0wLjc3Ny0zLjI5MS0wLjQyNC01LjExOS0wLjQyNC01LjExOUMwLjczNCw4LjE3OSw1LjkzNiwyLDEzLjE1OSwyQzE4LjUyMiwyLDIyLjgzMiw1LjM0MywyNC44NSwxMC4xMjZ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";


/**
 * @param {GameRoot} root 
 */
function ModImplementation(root) {

    

    this.draw = function (params) {
        const playerbases = root.entityMgr.getAllWithComponent()
    }

}


/**
 * @type {ModMainFunction}
 * @param {ModApi} api
 */
function MySampleMod(api) {

    // Preload some sprite, we'll use it later
    api.registerSprite("@MySampleMod/heart.png", heartImage);


    api.registerMod(ModImplementation);


    return Promise.resolve();
}

MySampleMod.name = "MySampleMod";
MySampleMod.version = "1.0.1";
MySampleMod.author = "tobspr";


window.registerMod(mySampleMod);
