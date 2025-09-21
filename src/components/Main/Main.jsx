import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loadingState,
    loading,
    resultData,
    setInput,
    input,
  } = React.useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Star-Think</p>
        <a target="_blank" href="https://accounts.google.com/">
          <img src={assets.user_icon} alt="" />
        </a>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Ethiopia</span>
              </p>
              <p>How can I help you today?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src={loading ? assets.gemini_gif : assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  style={{ marginTop: "0px" }}
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onKeyDown={(e) => {
                if (input && e.key === "Enter") {
                  onSent();
                }
              }}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter your message here..."
            />
            <div>
              <span>
                <img
                  src={assets.gallery_icon}
                  alt=""
                  data-tooltip-id="upload-image"
                  data-tooltip-content="Upload image"
                />
                <Tooltip
                  id="upload-image"
                  style={{ padding: "5px", fontSize: "12px", color: "#f0f4f9" }}
                />
              </span>
              <span>
                {" "}
                <img
                  src={assets.mic_icon}
                  alt=""
                  data-tooltip-id="use-microphone"
                  data-tooltip-content="Use microphone"
                />
                <Tooltip
                  id="use-microphone"
                  style={{ padding: "5px", fontSize: "12px", color: "#f0f4f9" }}
                />
              </span>
              {input.length > 0 && (
                <span className={`send-icon ${input.length > 0 ? "show" : ""}`}>
                  <img
                    onClick={() => {
                      onSent();
                    }}
                    src={assets.send_icon}
                    alt=""
                    data-tooltip-id="submit"
                    data-tooltip-content="Submit"
                  />
                  <Tooltip
                    id="submit"
                    style={{
                      padding: "5px",
                      fontSize: "12px",
                      color: "#f0f4f9",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
