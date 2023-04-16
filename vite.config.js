export default {
    base: '/',
    build: {
        rollupOptions:{
          input: {
                main: './index.html',
                'after-signup': './src/after-sign.html',
                'sign-up': './src/sign-up.html',
            }
        }
    }
}