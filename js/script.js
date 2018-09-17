/*function abrir() {
	document.getElementById("abrir").style.visibility="visible";
};
function cerrar() {
	document.getElementById("abrir").style.visibility="hidden";
};
function abrirauto() {
	setTimeout(abrirFeedback, 10000);
	function abrirFeedback() {
		document.getElementById("feedback").style.visibility="visible";
	}
}
abrirauto();
function abrirComentario() {
	document.getElementById("feedbackText").style.visibility="visible";
	document.getElementById("feedback").style.visibility="hidden";
};
function cerrarComen() {
	document.getElementById("feedbackText").style.visibility="hidden";
};*/


/* Email*/

const nodemailer = require('nodemailer');


function enviar(req, res) {
	alert("hola")
	let transporter = nodemailer.createTransport({
        host: 'Gmail',
        auth: {
            user: "aragonlopezjuan87@gmail.com", // generated ethereal user
            pass: "j123456789J" // generated ethereal password
        }
	});
	let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'aragonlopezjuan87@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

}