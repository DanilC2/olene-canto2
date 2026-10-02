import { permanentRedirect } from "next/navigation";

// "Business" is the home page; a permanent (308) redirect tells search engines to index "/" only.
export default function BusinessPage() {
  permanentRedirect("/");
}
