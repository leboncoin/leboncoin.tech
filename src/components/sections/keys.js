import Key from "../key";
import Section from "./layout";
import Background from "../../images/background-docker.jpg";
import React from "react";
import {Row} from "react-bootstrap";
import {faServer, faRocket, faDatabase, faImages, faCogs, faUserAstronaut, faCode, faFileUpload, faUpload, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'


class Keys extends React.Component {
  render() {
    return (
      <Section
        sectionName={"keys"}
      >
        <div className="bg-img" style={{backgroundImage: `url(${Background})`}}>
          <div className="overlay"/>
        </div>
        <Row>
          <Key icon={faServer} number={"2K+"} type={"VMs / Containers"}/>
          <Key icon={faRocket} number={"23Gbps"} type={"Throughput"}/>
          <Key icon={faDatabase} number={"6To"} type={"Database"}/>
          <Key icon={faImages} number={"300M"} type={"Pictures"}/>
        </Row>
      </Section>
    )
  }
}

class SecondKeys extends React.Component {
  render() {
    return (
      <Section sectionName={"secondkeys"}>
        <div className="bg-img" style={{backgroundImage: `url(${Background})`}}>
          <div className="overlay"/>
        </div>
        <Row>
          <Key icon={faUserAstronaut} number={"200+"} type={"Developers"}/>
          <Key icon={faCode} number={"13K+"} type={"Commits*"}/>
          <Key icon={faCogs} number={"60K+"} type={"CI Jobs*"}/>
          <Key icon={faCloudUploadAlt} number={"1K+"} type={"Deploys*"}/>
        </Row>
        <p className="monthinfo"><i>* Every month</i></p>
      </Section>
    )
  }
}

export {
  Keys, SecondKeys
}
