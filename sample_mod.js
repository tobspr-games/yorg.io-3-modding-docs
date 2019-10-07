/*

This is a very simple mod demonstration

*/

/**
 * @type {ModMainFunction}
 * @param {ModApi} api
 */
function MySampleMod(api) {

    // Its most convenient to have your resources encoded as base64 directly here
    const heartImage = new Image();
    heartImage.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRDc1QTRBOyIgZD0iTTI0Ljg1LDEwLjEyNmMyLjAxOC00Ljc4Myw2LjYyOC04LjEyNSwxMS45OS04LjEyNWM3LjIyMywwLDEyLjQyNSw2LjE3OSwxMy4wNzksMTMuNTQzICBjMCwwLDAuMzUzLDEuODI4LTAuNDI0LDUuMTE5Yy0xLjA1OCw0LjQ4Mi0zLjU0NSw4LjQ2NC02Ljg5OCwxMS41MDNMMjQuODUsNDhMNy40MDIsMzIuMTY1Yy0zLjM1My0zLjAzOC01Ljg0LTcuMDIxLTYuODk4LTExLjUwMyAgYy0wLjc3Ny0zLjI5MS0wLjQyNC01LjExOS0wLjQyNC01LjExOUMwLjczNCw4LjE3OSw1LjkzNiwyLDEzLjE1OSwyQzE4LjUyMiwyLDIyLjgzMiw1LjM0MywyNC44NSwxMC4xMjZ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";


    // Preload some sprite, we'll use it later
    const heartSprite = api.registerSprite("@MySampleMod/heart.png", heartImage);
    api.injectCss(`
        #state_MainMenuState .logo::after {
            content: "+Demo Mod!";
            color: #39f;

        }
    `);

    /**
     * @param {GameRoot} root 
     */
    function ModImplementation(root) {


        root.signals.postLoadHook.add(function () {
            // Do anything here you'd like to do after the game loaded
        });


        // Add some HTML Gui
        root.signals.readyToRender.add(() => {

            const guiDiv = document.createElement("div");
            document.body.appendChild(guiDiv);
            guiDiv.classList.add("hudElement");
            guiDiv.style.zIndex = "9999";
            guiDiv.style.position = "absolute";
            guiDiv.style.bottom = "calc(25px * var(--ui-scale))";
            guiDiv.style.right = "calc(25px * var(--ui-scale))";
            guiDiv.style.fontSize = "calc(10px * var(--ui-scale))";
            guiDiv.style.display = "flex";
            guiDiv.style.flexDirection = "column";


            guiDiv.innerHTML = `
                This is a html gui
            `;

            const button = document.createElement("button");
            button.classList.add("styledButton");
            button.innerText = "Some button";
            button.style.fontSize = "calc(10px * var(--ui-scale))";
            guiDiv.appendChild(button);

            api.trackClicks(button, () => {
                alert("Button clicked!");
            });

        });



        root.signals.modDrawWorldSpace.add(function (drawParameters) {

            // Draw a heart sprite over the playerbase
            if (root.gameInitialized) {
                const playerbaseComponent = api.getComponentClassById("Playerbase");
                const playerbases = root.entityMgr.getAllWithComponent(playerbaseComponent);

                for (let i = 0; i < playerbases.length; ++i) {
                    const base = playerbases[i];
                    heartSprite.drawCentered(drawParameters.context, base.x, base.y + 10, 7, 7);

                    drawParameters.context.fillStyle = "#fff";
                    drawParameters.context.textAlign = "center";
                    drawParameters.context.font = "5px GameFont";
                    drawParameters.context.fillText("Demo Mod!", base.x, base.y + 15);

                }
            }

        });


        root.signals.modDrawScreenSpace.add(function (drawParameters) {

            // Draw some overlay text

            // Make sure we draw the text at the right size, depending on the ui scale
            const uiScale =
                root.app.platformWrapper.getUiScale() *
                root.app.settings.getInterfaceScaleValue();
            drawParameters.context.fillStyle = "#fff";
            drawParameters.context.textAlign = "left";
            drawParameters.context.font = (uiScale * 10) + "px GameFont";
            drawParameters.context.fillText("Demo Mod is active!", 10 * uiScale, root.gameHeight - 50 * uiScale);
        });


        root.signals.aboutToDestruct.add(() => {
            // Do anything here to cleanup stuff
        });


        // To get a list of all signals:
        // console.log(root.signals)

    }

    api.registerModImplementation(ModImplementation);
}


window.registerMod(MySampleMod);
