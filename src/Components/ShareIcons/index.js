import rect from "react";
import styles from "./ShareIcons.css"
import { FacebookShareButton, EmailShareButton, LinkedinShareButton, TwitterShareButton, FacebookMessengerShareButton } from "react-share";

function ShareIcons () {
    const shareURL = window.location.href;

    return (
        <div className="shareIcon">
                 
                  <span className="facebookIcon">
                  <FacebookShareButton url={shareURL}>
                          <img
                            height={20}
                            width={20}
                            src="/img/icon/facebook.svg"
                          />
                  </FacebookShareButton>
                    </span>

                    <span className="messengerIcon">
                     <FacebookMessengerShareButton url={shareURL}>
                     <img
                            height={20}
                            width={20}
                            src="/img/icon/messenger.svg"
                          />
                     </FacebookMessengerShareButton>
                    </span>

                    <span className="linkedinIcon">
                      <LinkedinShareButton url={shareURL}>
                      <img
                          height={20}
                          width={20}
                          src="/img/icon/linkedin.svg"
                        />
                      </LinkedinShareButton>
                    </span>

                    <span className="twitterIcon">
                      <TwitterShareButton url={shareURL}>
                      <img
                          height={20}
                          width={20}
                          src="/img/icon/twitter.svg"
                        />
                      </TwitterShareButton>
                    </span>

                    <span className="emailIcon">
                      <EmailShareButton url={shareURL}>
                      <img
                          height={20}
                          width={20}
                          src="/img/icon/email.svg"
                        />
                      </EmailShareButton>
                    </span>
                  </div>
    )
}

export default ShareIcons;