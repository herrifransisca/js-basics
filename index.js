const address = {
  street: 'Komplek Handil Lestari No. B15',
  city: 'Jambi',
  zipCode: '36137'
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
