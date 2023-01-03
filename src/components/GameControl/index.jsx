import React, { Component } from "react";
import "./style.css";

import GameControl from "../../components/GameControl";
import LastPlayed from "../../pages/LastPlayed";

import Settings from "../../assets/Settings.png";
import Puzzle from "../../assets/Puzzle.png";
import newgame from "../../assets/newgame.svg";
import light from "../../assets/light.png";
import user_img from "../../assets/jeny.png";
import like from "../../assets/like.png";
import GODOFWAR2 from "../../assets/GODOFWAR2.png";
import SPIDERMAN from "../../assets/SPIDERMAN.png";
import SUPERMAN2 from "../../assets/SUPERMAN2.png";
import play1 from "../../assets/play1.png";
import play2 from "../../assets/play2.png";
import play3 from "../../assets/play3.png";
import play4 from "../../assets/play4.png";
import trophy from "../../assets/trophy.png";
import winframe from "../../assets/winframe.png";
import win from "../../assets/win.png";
import FRIENDS from "../../assets/FRIENDS.png";

export default class ControlPanel extends Component {

  state = {
    theme: "default",
  };

  changeTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };


  render() {
    return (
      <div className={`control-panel theme-${this.state.theme}`}>
        <div className="side-bar">
          <a href="/#">
            <img src={newgame} className="new-game" alt="new-game" />
          </a>

          <div className="icons">
            <a href="/#">
              <img src={like} className="like" alt="like" />
            </a>
            <a href="/#">
              <img src={Settings} className="setting" alt="setting" />
            </a>
            <a href="/#">
              <img src={Puzzle} className="comment" alt="comment" />
            </a>
          </div>

          <button
            className={`btn-theme ${
              this.state.theme === "default"
                ? "btn-theme-default"
                : "btn-theme-dark"
            }`}

            onClick={() =>
              this.changeTheme(
                this.state.theme === "default" ? "dark" : "default"
              )
            }
          >
            <img src={light} className="theme" alt="theme" />
          </button>
        </div>
        <div className="bar"></div>
        <main className="content">
          <div className="user">Welcome back, Jenny!</div>
          <img src={user_img} alt="user-img" className="user-img" />

          <div className="game">
            <h1 className="game-title">NEW GAMES </h1>
            <div className="games">
              <GameControl
                cardBg={GODOFWAR2} desc={"Join in the new DLC with Kratos to learn more about him and his future."
                }
              />
              <GameControl
                cardBg={SUPERMAN2} desc={"Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
                }
              />
              <GameControl
                cardBg={SPIDERMAN} desc={ "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
                }
                direction={"direction"}
              />
            </div>
          </div>

          <div className="last-games">
            <div className="played-list">
              <h3 className="last-played">last played</h3>

              <div className="list-played">
                <LastPlayed gameImg={play1} palyInfo={"Hogwarts Legacy 50%"} />
                <LastPlayed gameImg={play2} palyInfo={"God Of War: Ragnarök 72.5%"}/>
                <LastPlayed gameImg={play3} palyInfo={"Crash Bandicoot N. Sane Trilogy 34%"}/>
                <LastPlayed gameImg={play4} palyInfo={"Dying Light 2 Stay Human 100%"}/>
              </div>
            </div>

            <div className="main-trophy">
              <h3 className="tropyh-title">most recent trophy </h3>
              <div className="trophy">
                <img src={trophy} alt="trophy" className="trophy-img" />
                <img src={win} alt="win" className="win" />
                <img src={winframe} alt="winframe" className="win-shadow" />
                <p className="trophy-desc">
                  perfect KILL streak
                  <span className="trophy-desc-2">You are in the 0.5%</span>
                </p>
                <p className="last-time">
                  assassin's creed odyssey
                  <span className="last-time-2">last played: 34 hours ago</span>
                </p>
              </div>
            </div>
            <div className="friends">
              <p>friends</p>
              <img src={FRIENDS} alt="friends" className="friends_img" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}