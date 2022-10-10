import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2x1 font-medium">About</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            cum tempore placeat deserunt nihil commodi, doloremque provident.
            Maxime ex, vero, quibusdam eos, architecto dicta dolorem aliquid
            laborum consequatur tenetur suscipit.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};
