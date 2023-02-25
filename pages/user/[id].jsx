import { useRouter } from 'next/router'

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div> USER KE{id} </div>
  )

}
