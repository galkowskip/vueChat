<template>
  <div>
    <button @click="loginWithGoogle()">Login with Google</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleProvider } from "../firebase"

export default {
  methods: {
    loginWithGoogle: async function () {

      const auth = getAuth();
      try {
          const result = await signInWithPopup(auth, googleProvider)
          const credential = GoogleAuthProvider.credentialFromResult(result);
          this.$router.push('/')
      } catch(error) {
          // Handle Errors here.

          console.log(error)
      }
    },
  },
};
</script>

<style>
</style>