let fin1 = () => {
  return new Promise((resolve) => {
    resolve(10);
  });
};
let fin2 = (ten) => {
  let f2data = ten + 100;
  return new Promise((resolve) => {
    resolve(f2data);
  });
};
let fin3 = (onehundred_ten) => {
  let f3data = onehundred_ten + 1000;
  return new Promise((resolve) => {
    resolve(f3data);
  });
};
let fin4 = (eleven_h_ten) => {
  let f4data = eleven_h_ten + 190;
  return new Promise((resolve) => {
    resolve(f4data);
  });
};
let fin5 = (f5data) => {
  let finalres = f5data + 2000;
  console.log(finalres);
};

let promisefun = async () => {
  let f1d = await fin1();
  let f2d = await fin2(f1d);
  let f3d = await fin3(f2d);
  let f4d = await fin4(f3d);
  fin5(f4d);
};
promisefun();

// --------------------------
let addfun = (ten, t3) => {
  return new Promise((resolve) => {
    console.log("data fetching wait asecond.........._____....");
    setTimeout(() => {
      console.log("data 1.....");
      let data1res = ten + t3;
      resolve(data1res);
    }, 1000);
  });
};
let minfun = (add_data) => {
  return new Promise((resolve) => {
    let mindata = add_data + 100;
    setTimeout(() => {
      console.log("data 2........");
      resolve(mindata);
    }, 1000);
  });
};
let multifun = (mindata) => {
  let final_result = mindata * 100;
  console.log(final_result);
};

let your_result = async (ten, t3) => {
  let data1 = await addfun(ten, t3);
  let data2 = await minfun(data1);
  multifun(data2);
};
your_result(10, 30);

console.log("promise base concept");
