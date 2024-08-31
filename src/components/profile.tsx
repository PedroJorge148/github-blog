import { useEffect, useState } from "react";

import {
  FaBuilding as Building,
  FaGithub as Github,
  FaUsers as Users
} from "react-icons/fa6";
import { LuExternalLink as ExternalLink } from "react-icons/lu";

import { api } from "../lib/api";

interface ProfileProps {
  name: string
  profile_url: string
  image_url: string
  bio: string
  profile_name: string
  company: string | null
  followers: string
}

export function Profile() {
  const [user, setUser] = useState<ProfileProps | null>(null)

  useEffect(() => {
    async function fetchData() {
      await api.get('/users/pedrojorge148')
        .then((response) => {
          const { data } = response

          setUser({
            name: data.name,
            bio: data.bio,
            profile_url: data.html_url,
            image_url: data.avatar_url,
            profile_name: data.login,
            company: data.company,
            followers: data.followers
          })
        })
    }
    fetchData()
  }, [])

  return (
    <div className="relative z-10 mx-auto -mt-40 flex items-center gap-8 rounded-lg bg-baseprofile px-10 py-8 w-full">
      <img src={user?.image_url} alt="Foto do Github" className="size-36 rounded-lg" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-basetitle text-2xl font-bold">{user?.name}</h1>
            <a href={user?.profile_url} className="flex items-center gap-1 text-primary text-sm hover:underline leading-none">
              GITHUB
              <ExternalLink />
            </a>
          </div>
          <span>
            {user?.bio}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Github className="text-baselabel" />
            <span>{user?.profile_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="text-baselabel" />
            <span>{user?.company ?? 'Não associado'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-baselabel" />
            <span>{user?.followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}