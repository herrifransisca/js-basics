let message = 
'This is my\n first message';

message = 
'This is my\n' + 
'first message';

message = 
'This is my\n' + 
'\'first\' message';

message = 
`This is my
'first' message`;

const name = 'John';
message = 'Hi ' + name + ',\n';

const another =
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list.

Regards,
Mosh`;

console.log(message);
console.log(another);