function getWeatherPromise(location){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      reject('City not found!')
      resolve('15 degrees Celcius')
    },1000)
  });
}

getWeatherPromise('La Paz').then(
  function(temperature){
    console.log('Promise success:', temperature);
  },
  function(error){
    console.log('Promise error', error);
  }
);

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number') resolve (a+b);
    else reject('One or more arguments are not a number!');
  });
}

addPromise(1,2).then(
  function(result){
    console.log('Promise success:',result);
  },
  function(error){
    console.log('Promise error:',error);
  }
);

addPromise(1,"2").then(
  function(result){
    console.log('Promise success:',result);
  },
  function(error){
    console.log('Promise error:',error);
  }
);
