- Angular Material - "ngMaterial.module.ts"

    Step 1: Install Angular Material and Angular CDK
        npm install --save @angular/material @angular/cdk
    
    Step 2: Animations

    Step 3: Import the component modules

    Step 4: Include a theme
        If you're using the Angular CLI, you can add this to your styles.css:
    '@import "~@angular/material/prebuilt-themes/indigo-pink.css";'

    Step 5: Gesture Support
        - Hammer


############################################################################


- Install bootstrap NPM
    - npm install bootstrap --save
    - npm install jquery --save
    - npm install popper.js --save
    => "styles": [   
            "../node_modules/bootstrap/dist/css/bootstrap.min.css",
            "styles.css"
        ],
        "scripts": [  

            "../node_modules/jquery/dist/jquery.min.js",
            "../node_modules/bootstrap/dist/js/bootstrap.min.js",
            "../node_modules/popper.js/dist/umd/popper.min.js"
        ],

############################################################################


- Routing
    - Tạo router.module.ts
    - Import Routes, RouterModule trong router.module
    - Import các component trong router.module
    - Import appRouter trong app.module


############################################################################


- Search books thực hiện trong searchbook.component
    - Import HttpClientModule trong app.module
    - Import HttpClient trong searchbook.service
    - Import BooksService trong searchbook.component


############################################################################

- Sign IN, Sign Up
    - npm install --save firebase
    - Import Firebase khi dùng /import * as firebase from 'firebase';/
    - Khởi tạo Firebase /firebase.initializeApp/ trong app.component
    - Import FormsModule trong app.module
    - /firebase.auth().currentUser;/ check user đã đăng nhập


############################################################################
Link Realtime Database && Authentication: 'https://firebase.google.com/docs/guides/?authuser=0'

----------- CanActivate && CanDeactivate
