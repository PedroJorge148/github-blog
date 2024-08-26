import { LuExternalLink as ExternalLink } from "react-icons/lu";
import {
  FaGithub as Github,
  FaBuilding as Building,
  FaUsers as Users
} from "react-icons/fa6";

export function Profile() {
  return (
    <div className="relative z-10 mx-auto -mt-40 flex items-center gap-8 rounded-lg bg-baseprofile px-10 py-8 w-full">
      <img src="https://github.com/pedrojorge148.png" alt="Foto do Github" className="size-36 rounded-lg" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-basetitle text-2xl font-bold">Pedro Jorge</h1>
            <a href="#" className="flex items-center gap-1 text-primary text-sm hover:underline leading-none">
              GITHUB
              <ExternalLink />
            </a>
          </div>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Github className="text-baselabel" />
            <span>pedrojorge148</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="text-baselabel" />
            <span>Rocketseat</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-baselabel" />
            <span>32 seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}