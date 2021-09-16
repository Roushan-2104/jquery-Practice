$(document).ready(function(){
    $("#first").text("HELLO THEIR!!");
    $("#dark").on("click",function () { //$(selector).on("click", function(){ CONTENT })
        $("#add").html("<p class='lead display-6 fw-bold text-primary text-center mt-5'>HELLO NoobCoders !!<br /><button class='btn-lg btn-dark text-center mt-4' id='para'>GENERATE PARAGRAPH &#128526; !!</button></p>");
        $("#dark").remove();
        $("#para").on("click",function () {
            $("#add").after("<p class='lead fs-5 text-warning mt-3 p-5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quis recusandae aliquid, delectus ducimus facilis nulla incidunt dolor enim iusto eligendi ad error placeat aliquam voluptas velit? Nihil, incidunt veniam?Quo dolorum consectetur corrupti exercitationem pariatur deserunt mollitia! Illo in nisi ab ipsam. A animi enim est repellat asperiores dolor ipsum. Nostrum aliquam, laboriosam impedit ea consequuntur nisi vel incidunt?Cum, repudiandae minus. Quod similique laboriosam pariatur id dolorem consequuntur necessitatibus magnam mollitia dolorum! Sequi maiores itaque expedita necessitatibus corrupti odit. Ratione in corporis quos, tempora consequatur natus pariatur doloribus?Officia, eum! Tenetur explicabo sit odio, deleniti cumque minima blanditiis facere asperiores temporibus tempora sequi quis quisquam enim corrupti commodi debitis ad nemo delectus. Maiores architecto recusandae harum labore dolore!Nemo molestias perferendis iste eligendi porro praesentium dignissimos? Aliquam culpa hic quidem excepturi necessitatibus dolorum quo reiciendis earum tempore sed. Dolores architecto doloribus est porro rerum impedit, assumenda beatae harum. </p>");
            $("#para").remove();
        })
    });
});