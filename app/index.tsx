import { Redirect } from "expo-router";

export default function Index() {
  // TODO: check if user is signed in
  return <Redirect href="/auth/auth" />;
}
