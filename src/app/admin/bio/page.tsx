import prisma from "../../../../lib/prisma";
import EditBio from "@/app/components/admin/EditBio";

export default async function EditBioPage() {
    const bioData = await prisma.profile.findUnique({where: {id: '663e2ea55ccb92e4cd356ba6'}});
  return <EditBio bioData={bioData} />;
}
