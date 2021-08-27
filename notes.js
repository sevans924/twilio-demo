//How does a user find this number? The website?

//User sends initial message
//App stores user phone number 
//App sends message to # with language
//User replies with language selection
//App stores language selection
//App sends a message asking for a zip code in the selected language
//User responds with zip code
//App stores zip code
//App queries DB for resources that match both the language and the zip code
//App sends resource info to user


//How does an org find this number? Website?

//Org sends "Add Our Info"
//App stores org phone number
//App




//Can organizations and survivors text different numbers?
//Can we create a form to add an organization on the site? Why text over form on website?
//How are organizations vetted before being submitted to a database?
//Can Orgs select more than one language? This could help with matching process
//Does data need to persist for a survivor? - use local storage 


//Tech
//What tech stack? Back end/Front end

// curl -X POST https://api.twilio.com/2010-04-01/Accounts/AC77f752aabad8f4d265fa88f4c593d86a/Messages.json \
// --data-urlencode "Body=$Hi there from Twilio" \
// --data-urlencode "From=+17632517936" \
// --data-urlencode "To=+13015038506" \
// -u AC77f752aabad8f4d265fa88f4c593d86a:6fe08372eac8d8ad981bf3c99cb1f476