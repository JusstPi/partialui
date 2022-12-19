import { Link, useMatch, useResolvedPath } from "react-router-dom"
import MenuDropDown from "./MenuDropDown"

export default function ParentHeaderNavBar() {
  return (
    <nav className="nav">
      <Link to="/home">
        <p className="site-title">SUBAY</p>
      </Link>
      <ul>
        <CustomLink to="/trackStudent">Track Student</CustomLink>
        <CustomLink to="/monitoredStudents">Monitored Students</CustomLink>
        <CustomLink to="/timestamps">Timestamps</CustomLink>
        <CustomLink to="/alertNotifications">Alert/Notifications</CustomLink>
        <MenuDropDown/>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props } : any) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}