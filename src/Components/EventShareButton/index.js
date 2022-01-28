import ShareIcons from "../ShareIcons";
import { useState } from "react";
import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./EventShareButton.css"





function EventShareButton (props) {
    const [copyUrl, setCopyUrl] = useState(false)

    const shareURL = window.location.href;

    Modal.setAppElement('#root')

    return (
    <Modal 
    isOpen={props.onClick}
    onRequestClose={props.onClick}
    style={
        {  
            content: {
               position: "none",
               padding: 0,
            }
        }
       
    }>
    <div  className="shareEventPage" onClick={props.onClick}>
         <div className="shareEventPageDiv" onClick={e => e.stopPropagation()}>
             <div className="shareEventPageInfo">
                 <header className="eventPageShearHeader">
                     <div className="eventPageShearHeaderTitlle">
                         <h2 className="eventPageShearHeaderText">Share with friends</h2>
                     </div>

                 </header>
                   <div className="eventPageShearBody">
                       <section className="eventPageShearBodySection">
                           <div className="eventPageShearBody">
                               <div className="eventPageShearIcons">
                                   <ShareIcons />
                               </div>
                               <div className="eventPageShearUrl">
                                   <div className="eventPageShearUrlBody">
                                       <div className="eventPageShearUrlTitle">
                                          <span className="eventPageShearUrlName"> Event URL </span> 
                                       </div>
                                       <input className="eventPageShearUrlInput" value={shareURL} readonly />
                                   </div>
                                   <span className="eventPageShearUrlCopy">
                                       <span className="eventPageShearUrlCopyIcons">
                                           <CopyToClipboard text={shareURL} 
                                           onCopy={() => setCopyUrl(!copyUrl)} >
                                              <button className="eventPageShearUrlCopyIcons">
                                               <img height={24} width={24} src="/img/copy.svg"/>
                                             </button>
                                           </CopyToClipboard>
                                       </span>
                                       <div className="copyUrlTextCopy">
                                          {copyUrl ? "Copied" : "Copy"}
                                       </div>
                                   </span>
                               </div>
                           </div>
                       </section>
                   </div>
             </div>
             <div className="closeEventPageShare">
                   <span>
                       <button onClick={props.onClick} className="closeEventPageShareButton">
                           <img height={18} width={18} src="/img/close.svg"/>
                       </button>
                   </span>
             </div>
         </div>
   </div>
   </Modal>
    )
}

export default EventShareButton;