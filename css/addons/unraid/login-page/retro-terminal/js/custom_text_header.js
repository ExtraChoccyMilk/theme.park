
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>    
    __  ___                                                          
   /  |/  /___  ____  ____  ____  ____  ____  ____  ____  ____  ____ 
  / /|_/ / __ \\/ __ \\/ __ \\/ __ \\/ __ \\/ __ \\/ __ \\/ __ \\/ __ \\/ __ \\
 / /  / / /_/ / /_/ / /_/ / /_/ / /_/ / /_/ / /_/ / /_/ / /_/ / /_/ /
/_/  /_/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\____/ 
                                                                     </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
