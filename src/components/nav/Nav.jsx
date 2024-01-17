import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/store"}>Store</Link></li>
        <li><Link href={"/profile"}>Perfil</Link></li>
        <li><Link href={"/post"}>Post</Link></li>
      </ul>
    </div>
  )
}

export default Nav
