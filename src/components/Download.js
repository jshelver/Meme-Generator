import { toPng } from 'html-to-image';
import download from "downloadjs"

export default function Download() {
    const node = document.getElementById('meme-download')

    function downloadImage() {
        toPng(node)
            .then((dataURL) => {
                download(dataURL, "custom-meme.png")
            })
            .catch(() => console.log("Error"))
    }

    return (
        <div className="download">
            <button onClick={downloadImage} className="download-button">Download Image</button>
        </div>
    )
}