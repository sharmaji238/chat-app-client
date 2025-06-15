import FileOpenIcon from '@mui/icons-material/FileOpen'
import { transformImage } from '../../lib/features'

const RenderAttachment = (fileType, url) => {
    switch (fileType) {
        case "image":
            return <img src={transformImage(url, 200)} alt="attachment" style={{ objectFit: "contain", maxWidth: "200px", maxHeight: "150px" }} />
        case "video":
            return <video src={url} controls style={{ maxWidth: "100px", maxHeight: "100px" }} />
        case "audio":
            return <audio src={url} controls style={{ maxWidth: "100px", maxHeight: "100px" }} />
        case "document":
            return <a href={url} target="_blank" rel="noopener noreferrer">Download Document</a>
        default:
            return <FileOpenIcon />

    }
}
export default RenderAttachment;