- **What is Authentication?**
    - **Authentication** is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for. (**Identification**)
    - It is used by both servers and clients.


- **What is Authorization?**
    - **Authorization** is the process of granting someone to do something. It means it is a way to check if the user has permission to use a resource or not.
    - It usually works with authentication so that the system could know who is accessing the information.
    - In authorization, data is provided through the access tokens.
    - Authorization permissions cannot be changed by the user. The permissions are given to a user by the owner/manager of the system, and he can only change it.


- **How do you do role-based authentication?**
    - Role-based authentication is a common technique used to manage access control in systems with multiple users. In this approach, each user is assigned a specific role or set of roles that determine their level of access to various resources within the system.
    - Identify the different roles that will be needed to access different resources within the system. For example, a system might have roles such as "teachers", "students", or “admin”.
    - We can separate out the parts of our application based on features ( like roles, such as students, and teachers )with the help of routes.



- **What is hashing?**
    - Hashing is a process of transforming plain text into a fixed-length sequence of characters, known as a **hash.**
    - Hashing is used to store passwords securely in a database.
    - When a user creates a password, the password is hashed before it is stored in the database. This ensures that even if the database is compromised, an attacker would not be able to easily obtain the original passwords.
    - When the user logs in again, their password is hashed again and compared to the stored hash to verify their identity.
    - Hashing algorithms are one-way designed, meaning that it is difficult (or infeasible) to decrypt the original cleartext from the hash. This makes it difficult for attackers to obtain the original password, even if they have access to the hash.
    - The **`bcrypt`** module (**third-party package available for Node.js** ) is there that provides an implementation of the bcrypt hashing function. It can be used to securely store passwords in a way that makes them difficult to crack.
    - The **`bcrypt`** module is built on top of the bcrypt algorithm and provides a simple interface for hashing passwords and comparing them to hashed values.
    - Hashing provides an extra layer of security, it is not foolproof. Attackers can still use methods such as brute force attacks to try to guess passwords, even if they only have access to the hashed values.
    - To overcome this **salt ( a random sequence of characters )** is added to the password before it is hashed.


- **What is encryption?**
    - Encryption is the process of converting plain, readable data or information into an encoded form so that it can only be accessed and understood by authorized parties who have the decryption key.
    - The purpose of encryption is to protect data from unauthorized access, theft, or modification.
    - The coded message is called **cipher text.**
    - The transformation from plain text to cipher text is done using an encryption algorithm and a secret key.
    - Decryption (the process of converting encrypted data back into its original form) is required so that it can be read and understood by an authorized recipient.
    - For decrypting the cipher text, you require a key or password that was used to encrypt the data, without which the data cannot be decrypted.
    - Data like **videos, audios** and even **WhatsApp messages** are sent in encrypted form.


- **How are hashing and encryption different?**
    
    
    ### HASHING
    
    - Hashing is a one-way process that takes data and produces a fixed-size output, called a **hash**.
    - The hash cannot be reversed back to the original data.
    - Hashing is used for storing passwords securely, as the hash of a password can be stored instead of the password itself.
    - When a user enters their password, the system takes the **hash** of the password and compares it with the stored **hash** to see if they match.
    
    ### ENCRYPTION
    
    - Encryption is a two-way process that transforms plain text into ciphertext using an encryption algorithm and a key.
    - The cipher text can be decrypted to the original data as well.
    - Encryption is used for securing data during transmission, such as when sending sensitive information over the internet. such as videos, audio, and even WhatsApp messages.
    - The ciphertext can be decrypted back into the plain text using a decryption algorithm and the same key.


- **What is salt?**
    - S**alt is a random sequence of characters that** is added to the password before it is hashed.
    - The **purpose of the salt** is to add an extra layer of security to the password hash.
    - When a user creates a password, the password is first combined with a random salt value. The resulting combination is then hashed and stored in the database along with the salt value.
    - When the user logs in again, the salt value is retrieved from the database and combined with the entered password. The resulting combination is then hashed and compared to the stored hash value to verify the user's identity.


- **What is JWT?**
    - **JWT** stands for **JSON Web Token**. It is a compact, URL-safe means of representing claims to be transferred between two parties. JWTs are used for authentication and authorization in web applications and APIs.
    - They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using hashing to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.
    - A JWT is composed of three parts:
        - **Header**: Consists of two parts:
            - The signing algorithm that’s being used.
            - The type of token, which, in this case, is mostly “JWT”.
        - **Payload**: The payload contains the claims or the JSON object.
        - **Signature**: A string that is generated via a cryptographic algorithm (hashing) that can be used to verify the integrity of the JSON payload.



- **How is JWT different and list the pros and cons of using JWT tokens?**
    - JWT is a format for securely transmitting data between parties, while hashing and encryption are cryptographic techniques for transforming data. JWT is used for authentication and authorization in web applications, while hashing and encryption are used for data validation and data confidentiality.
    - **PROS of JWT -**
        - **Stateless and Scalable**: JWTs do not require a database or server-side storage to maintain state information. This makes them easier to manage and more scalable.
        - **Security:** JWTs can be digitally signed and encrypted, providing a high level of security for transmitting sensitive information.
        - **Standardized:** JWTs are an open standard, supported by many programming languages and web frameworks, making them widely adopted and easy to integrate into different systems.
        - **Versatile:** JWTs can be used for authentication and authorization purposes, as well as for storing custom user attributes or other metadata.
    - **CONS of JWT -**
        - **Payload Size:** JWT tokens can be larger in size than other types of tokens, such as session cookies, which can impact network performance.
        1. **No Revocation:** Once a JWT token is issued, it cannot be revoked until it expires, which can be a security risk in certain cases.
        2. **Token Validation:** Validating the signature of a JWT token requires additional computation, which can impact performance in high-traffic systems.
        3. **Security Risks:** If the encryption or signature algorithms used to generate the JWT token are compromised, the token and the data it contains may be vulnerable to attack.



- **What are the different ways to manage authentication?**
    
    There are several ways to manage authentication.
    
    - **MFA(Multi-factor Authentication) -**
        - It requires at least two methods of authentication. This is becoming more common because passwords alone are no longer considered secure.
        - With multi-factor authentication, a user is asked to enter a username and password. If it matches, a code is sent to an authentication app, phone number, email, or another resource then only the user is supposed to have access. The user will then enter that code on the login page.
    - **2FA(Two-factor authentication) -**
        - It requires exactly two methods of verification, which would mean entering the user’s password in addition to one of the methods (e.g., verifying a code sent to their phone, email, app, etc.).
        - Two-factor authentication is becoming more common with consumer applications because it offers much more security than a password alone without causing a lot of inconvenience for the user.
    - **Third-party authentication providers -**
        - Websites can use third-party authentication providers, such as Google, Facebook, or Twitter, to authenticate users. This is known as social login.
    - **SSO(Single-sign-on) -**
        - Websites can implement SSO using protocols such as SAML (**Security Assertion Markup Language**) or OAuth to allow users to authenticate once and gain access to multiple websites or applications without having to enter their credentials repeatedly.
        - Within an enterprise setting, using an SSO provider means that employees need to only log in once each day. From there, authentication takes place behind the scenes as the identity provider exchanges verification keys with all of the websites and apps that you have set up to use SSO.



- **What is cookie-based auth?**
    - **Cookie-based auth** is a method of managing user authentication in web applications where a cookie (**pieces of data used to identify the user and their preferences**) is used to store user authentication information.
    - The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user.
    - When a user logs in to a website, the server generates a unique session identifier and sends it back to the user's browser in the form of a cookie. The browser then stores the cookie, and sends it back to the server with every subsequent request, allowing the server to identify and authenticate the user.
    - The cookie usually contains an encrypted or hashed version of the user's authentication credentials, such as a username and password. The server verifies the credentials stored in the cookie and uses them to authenticate the user for subsequent requests.
    - Cookies can be set to expire after a certain period of time, or when the user logs out of the website. This helps to ensure that the user's session remains secure and that their authentication information is not compromised.
    - Its drawback is that cookies can be intercepted and manipulated by attackers, potentially leading to security vulnerabilities.


- **What is session management?**
    - Session management is the process of securely managing and maintaining the state of a user's interaction with a web application or system.
    - The purpose of session management is to keep track of a user’s actions across multiple pages or requests and to persist the data for the duration of the user’s session.
    - This is typically achieved by assigning a unique session ID to the user and storing relevant information, such as the user’s preferences or shopping cart contents, on the server. The session ID is then passed back and forth between the client and the server to ensure that the correct information is retrieved and updated for each request.
    - The ultimate goal of session management is to provide a seamless and personalized experience for the user and also ensure the security and reliability of the data being stored.




- **What is OAuth?**
    - **OAuth (Open Authorization)** is an open standard and authorization protocol that allows third-party applications to access user data from a resource server (such as a social media platform like Facebook, Gmail, etc., or cloud storage service) on behalf of the user, without requiring the user to share their login credentials with the third-party application.
    - The OAuth process involves the client (**the third-party application that wants to access the user's data**) obtaining an access token from the resource server (**the server that hosts the user's data and is responsible for authenticating the user**)after the user authenticates themselves on the resource server. This access token is then used by the client to access the user's data from the resource server. The access token is typically valid for a limited time period and can be revoked by the resource owner (**the user who owns the data that the third-party application wants to access**) at any time.