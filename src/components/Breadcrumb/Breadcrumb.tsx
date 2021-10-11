import { Link } from "../Link/Link";

interface LinkProp {
  id: string;
  name: string;
  path: string;
}
export interface BreadcrumbProps {
  links: LinkProp[];
}
export function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
