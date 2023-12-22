(function(){
    const cometaContainer = document.getElementById("cometaContainer");
    const cometaFrame = document.createElement("iframe");
    cometaContainer.appendChild(cometaFrame);

    function updateCanvasSize() {
        const width = window.innerWidth;

        let clipPathValue, canvasWidth, canvasHeight;

        if (width <= 450) {
            clipPathValue = "36px";
            canvasWidth = "240px";
            canvasHeight = "180px";
        } else if (width >= 450 && width <= 575) {
            clipPathValue = "40px";
            canvasWidth = "240px";
            canvasHeight = "180px";
        } else if (width >= 576 && width <= 767) {
            clipPathValue = "45px";
            canvasWidth = "360px";
            canvasHeight = "270px";
        } else if (width >= 768 && width <= 991) {
            clipPathValue = "55px";
            canvasWidth = "480px";
            canvasHeight = "360px";
        } else if (width >= 992 && width <= 1200) {
            clipPathValue = "110px";
            canvasWidth = "640px";
            canvasHeight = "540px";
        } else if (width >= 1200) {
            clipPathValue = "150px";
            canvasWidth = "900px";
            canvasHeight = "800px";
        }

        cometaContainer.style.width = canvasWidth;
        cometaContainer.style.height = canvasHeight;
        cometaFrame.style.width = canvasWidth;
        cometaFrame.style.height = canvasHeight;
        cometaContainer.style.top = "0";
        cometaContainer.style.right = "0";

        cometaFrame.contentDocument.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
                <script src="https://unpkg.com/@rive-app/canvas@2.7.0"></script>
            </head>
            <style>
                body {
                    margin: 0;
                    overflow: hidden;
                }

                canvas#canvas {
                    clip-path: inset(0 0 ${clipPathValue});
                }
            </style>
            <body>
                <canvas id="canvas" width=${canvasWidth} height= ${canvasHeight}></canvas>
                <script>
                    const r = new rive.Rive({
                        src: "https://print-craft.s3.amazonaws.com/new_file.riv",
                        canvas: document.getElementById("canvas"),
                        autoplay: true,
                    });
                </script>
                <script>

                </script>
            </body>
            </html>
        `);
    }

    window.addEventListener("load", updateCanvasSize);
    window.addEventListener("resize", updateCanvasSize);
})();
