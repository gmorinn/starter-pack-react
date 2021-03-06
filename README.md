# 🔥 REACTJS X GM 🔥

### What is that ?
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

A starter-pack to make your web applications in React.
This starter pack contains ***advanced concepts** like ...

### React Query

React Query helps you:
- Remove many lines of complicated.

- Optimizing performance

- Manage error cases and load times during a request

- Have a structured and understandable code


Simple implementation with Google authentication:

```js
const signWithGoogle = useMutation(api.SignWithGoogle, {
    onSuccess: () => {
        router.push('/')
    }
})
```

```js
export const SignWithGoogle = async () => {
    await firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}
```

```js
<Button size="small" className="w-100 px-5 pt-3 pb-3 mb-2" variant="contained" color='error' disabled={signWithGoogle.isLoading} onClick={signWithGoogle.mutate}>
        {signWithGoogle.isLoading ? <Loader /> : <><Box component="i" marginRight="1rem"><GoogleIcon /></Box>Se connecter avec Google</>}
</Button>
```

### React Hook Form

React Hook Form is the best tool for managing your forms.
This library strives to provide the best user experience and provide consistency validation strategies.

With React-Hook-Form, you could:

- Save a lot of time on the management of error cases

```js
const schema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    password: yup.string().required().min(7),
    confirmPassword: yup.string().required().min(7)
        .oneOf([yup.ref('password'), null], 'Mot de passe différent.'),
    }).required();
```

```js
{errors.confirmPassword?.type === 'required' && <span className="text-danger">Mot de passe requis</span>}
{errors.confirmPassword?.type === 'min' && <span className="text-danger">Trop petit</span>}
{errors.confirmPassword?.type === 'oneOf' && <span className="text-danger">Mot de passe différent</span>}
```

- Facilitate data management
```js
const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
});
```
```js
    const onSubmit = data => mutate(data);
```

### Materiel UI

Material UI allows you to build your own design system and develop React apps faster.

I couldn't describe all of the wonderful things that Material UI has to offer in a readme file, but put simply, this is one of the best tools for managing the responsive and design of your app.

A basic example
```js
<Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 5, md: 10, xl: 20 }}>
    <Grid item md={6} sx={{ width: '75%' }}>
        <SignIn />
    </Grid>
    <Grid item md={6} sx={{ width: '75%' }}>
        <SignUp />
    </Grid>
</Grid>
```


### Custom Hooks
***All the files can be found in the Hook folder***

- useUpdateEffect
useUpdateEffect ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.

- useRouter
To group together in a single hook:
useParams, useLocation, useHistory, and useRouteMatch

- useArray
A custom React hook that lets you manipulate an array data structure 

- useApi
Used to make async requests

### Firebase
For authentification
```js
export const SigninWithMailAndPassword = async ({email, password}) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}

export const SignWithGoogle = async () => {
    await firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}

export const SignWithFacebook = async () => {
    await firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}
```

### And soon ...

- Stripe integration

- Paypal integration

- Integration of an API made in Golang (<a href="https://github.com/gmorinn/starter-pack-goa">Starter Pack API</a>)

- Integration of advanced concepts of Firebase