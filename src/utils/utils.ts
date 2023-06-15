import { ROLES } from "../constant/roles";

// ================================= Render Dashboard According to the Role =================================
export const renderDashboard = (role: string) => {

  const returnDashboard: any = {
    admin: ROLES.user = "/user-dashboard",
  }

 // Return the above, if there's isn't return /dashboard (Admin)
  return returnDashboard[role] || "/dashboard";

}