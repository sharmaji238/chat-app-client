import { Box, Icon, IconButton, Modal, Stack, Typography } from "@mui/material";
import { memo, useState } from "react";
import moment from "moment";
import { fileFormat, transformImage } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";
import { pink } from "../../constants/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { tr } from "framer-motion/client";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  // const file = fileFormat(attachments[0]?.url);

  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ type: null, url: null });

  const handleOpen = (type, url) => {
    setSelectedMedia({ type, url });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
     <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
        <Stack justifyContent={"space-between"} direction={"row"} > 
          {
            <Typography color={pink} fontWeight={"600"} variant="caption">
              {!sameSender ? sender?.name : `${sender?.name} (You)`}
            </Typography>
          }
          <IconButton size="small"><MoreVertIcon sx={{fontSize:'1rem', color:pink}} /></IconButton>
        </Stack>

      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const fileType = fileFormat(url);
          const isMedia = fileType === "image" || fileType === "video";
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                  display: "inline-block"
                }}
                 onClick={(e) => {
                    if (isMedia) {
                      e.preventDefault(); // prevent default download
                      handleOpen(fileType, url);
                    }
                  }}
              >
                {RenderAttachment(fileType, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
     </motion.div>


     {/* MODAL FOR IMAGE / VIDEO */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {selectedMedia.type === "image" && (
            <img
              src={transformImage(selectedMedia.url, 800)}
              alt="attachment"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
          {selectedMedia.type === "video" && (
            <video
              controls
              src={selectedMedia.url}
              style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 8 }}
            />
          )}
        </Box>
      </Modal>

    </>
  );
};

export default memo(MessageComponent);


      
