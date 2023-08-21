import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MemberInterface } from '../../../../core/context/organization/OrganizationContext'

interface Prop {
  member: MemberInterface
}
const MemberRow: FC<Prop> = ({member}) => {
  return (
   
        <>
          <img src={member.avatar_url} />
          <span>{member.id}</span>
          <Link to={`/detail/${member.login}`}>{member.login}</Link>
        </>

  )
}

export default MemberRow