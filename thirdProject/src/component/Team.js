import React, { Component } from "react";
import TeamMember from "./TeamMember";

class Team extends Component {
  render() {
    const info = [
      {
        id: 1,
        img: "image/first.jpg",
        name: "Team Member 1",
        position: "Front-end Developer",
        phone: "+972-1111111",
        website: "https://example.com/member1",
        email: "member1@example.com",
      },
      {
        id: 2,
        img: "image/second.jpg",
        name: "Team Member 2",
        position: "Back-end Developer",
        phone: "+972-2222222",
        website: "https://example.com/member2",
        email: "member2@example.com",
      },
      {
        id: 3,
        img: "image/third.jpg",
        name: "Team Member 3",
        position: "UI/UX Designer",
        phone: "+972-3333333",
        website: "https://example.com/member3",
        email: "member3@example.com",
      },
    ];

    const members = info.map(function (member) {
      return (
        <TeamMember
          key={member.id}
          img={member.img}
          name={member.name}
          position={member.position}
          phone={member.phone}
          website={member.website}
          email={member.email}
        />
      );
    });

    return (
      <div className="row">
        {members}
      </div>
    );
  }
}

export default Team;
