import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <Link href={gitUrl} onClick={(e) => e.preventDefault()}>
        <Image
        
          className="h-52 md:h-72 relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
          onClick={() => window.open(gitUrl, "_blank")}
          zIndex={1}
        />
      </Link>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;