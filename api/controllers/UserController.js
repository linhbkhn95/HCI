/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getListSoDuHienCo:function(req,res,next){
		var list = [{SHTKGD:"009C12312321", MaCCQ:"VFMFV1", Tong:"50000",KhaDung:"20000",NgayPhatSinh:"22/04/2017",Loai:"Thường",SanPham:"Thông thường"},
								{SHTKGD:"009C12312321", MaCCQ:"VFMFV1", Tong:"10000",KhaDung:"5000",NgayPhatSinh:"22/05/2017",Loai:"Thường",SanPham:"Thông thường"},
								{SHTKGD:"009C12312321", MaCCQ:"VFMFV4", Tong:"10000",KhaDung:"00000",NgayPhatSinh:"22/06/2017",Loai:"SIP",SanPham:"iSaving"}]
		return res.send(list);
	},
	getListSoLenh:function(req,res,next){
		var list = [
			{MaCCQ:"VFMVF1",SHTKGD:"999C132iw089q",MuaBan:"Bán",LoaiLenh:"thường",SanPham:"thường",TrangThai:"Chờ khớp",GiaTri:"",SoLuong:"1000",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"},
			{MaCCQ:"VFMVF4",SHTKGD:"009C12312321",MuaBan:"Mua",LoaiLenh:"SIP",SanPham:"iSaving",TrangThai:"Chờ đối chiếu",GiaTri:"50000",SoLuong:"",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"},
			{MaCCQ:"VFMVF1",SHTKGD:"009C12312321",MuaBan:"Bán",LoaiLenh:"Hoán đổi",SanPham:"thường",TrangThai:"Chờ khớp",GiaTri:"50000",SoLuong:"1000",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"},
			{MaCCQ:"VFMVF4",SHTKGD:"999C132iw089q",MuaBan:"Mua",LoaiLenh:"Hoán đổi",SanPham:"iSaving",TrangThai:"Chờ khớp",GiaTri:"",SoLuong:"",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"},
			{MaCCQ:"VFMVF4",SHTKGD:"123456789",MuaBan:"Bán",LoaiLenh:"IPO",SanPham:"IPO",TrangThai:"Chờ đối chiếu",GiaTri:"50000",SoLuong:"",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"},
			{MaCCQ:"VFMVF1",SHTKGD:"123456789",MuaBan:"Mua",LoaiLenh:"SIP",SanPham:"thường",TrangThai:"Chờ khớp",GiaTri:"",SoLuong:"1000",NgayDatLenh:"02/12/2017",NgayGiaoDich:"04/12/2017",UserDat:"Online"}
		];
		return res.send(list);
	},
	getListNDTDangKy:function(req,res,next){
		var list = [
			{MaCCQ:"VFMVF1",SHTKGD:"009C12312321",SDKSH:"123456",SoTienDangKy:"5000000",SanPhamSIP:"i-Saving",NgayGiaoDich:"04/12/2017",ThoiDiemBatDau:"01/05/2017",SoKyVPLienTuc:"1", TongSoKyVP:"2",TrangThai:"Ngừng",LoaiNgungTG:"Ngừng hẳn"},
			{MaCCQ:"VFMVF4",SHTKGD:"444444444444",SDKSH:"222222",SoTienDangKy:"3000000",SanPhamSIP:"i-Saving",NgayGiaoDich:"04/12/2017",ThoiDiemBatDau:"01/05/2017",SoKyVPLienTuc:"1", TongSoKyVP:"2",TrangThai:"Ngừng",LoaiNgungTG:"Ngừng hẳn"},
			{MaCCQ:"VFMVF4",SHTKGD:"999988989898",SDKSH:"333333",SoTienDangKy:"2000000",SanPhamSIP:"i-Saving",NgayGiaoDich:"04/12/2017",ThoiDiemBatDau:"01/05/2017",SoKyVPLienTuc:"1", TongSoKyVP:"2",TrangThai:"Ngừng",LoaiNgungTG:"Ngừng hẳn"}
		];
		return res.send(list);
	},
	getListChiTietGoiSip: function(req,res,next){
		var list = [
			{MaCCQ:"VFMFV1", SHTKGD:"009C12312321",SDKSH:"123456",NgayPhatSinh:"15/02/2017", SoTienKhop:"5000000", SoLuongPhanBo:"5000", SoDuHienCo:"3000", ViPham:""},
			{MaCCQ:"VFMFV1", SHTKGD:"009C12312321",SDKSH:"123456",NgayPhatSinh:"15/02/2017", SoTienKhop:"Không có tiền", SoLuongPhanBo:"Không có tiền", SoDuHienCo:"0", ViPham:"có"},
			{MaCCQ:"VFMFV1", SHTKGD:"009C12312321",SDKSH:"123456",NgayPhatSinh:"15/03/2017", SoTienKhop:"4000000", SoLuongPhanBo:"4000", SoDuHienCo:"4000", ViPham:"có"},
			{MaCCQ:"VFMFV1", SHTKGD:"009C12312321",SDKSH:"123456",NgayPhatSinh:"15/04/2017", SoTienKhop:"5000000", SoLuongPhanBo:"5000", SoDuHienCo:"5000", ViPham:"có"},
			{MaCCQ:"VFMFV1", SHTKGD:"009C12312321",SDKSH:"123456",NgayPhatSinh:"15/05/2017", SoTienKhop:"0", SoLuongPhanBo:"0", SoDuHienCo:"0", ViPham:""}
		];
		return res.send(list);
	},
	getInfBien:function(req,res,next){
		var {id} = req.body;
		var data =
			{TenNguoiDuocUQ:"Phạm Xuân Biển", SoCMTND:"1012226969", NgayCap:"12/12/2000", NoiCap:"Quảng Ninh", DiaChi:"Hà Nội",SoDT:"012312312" ,NgayHieuLuc: "08-07-2017",NgayHetHieuLuc:"05/06/2017" ,PhamVi:"Đặt lệnh"};

		return res.json(200, data);
	},
	'getInf':function(req,res,next){
		var {id} = req.body;

		var data1={
		     infAccount:{
					 				 Id:1,
							     Name:"Trịnh đức Bảo Linh",
							     SoDKSH:"1s2s22"
				 },
				 listMoney :[
	         {MaCCQ:"VFMF1", Tong:"5000", Khadung:"5000", MuaChoVe:"5000", BanChoGiao:"5000"},
	         {MaCCQ:"VFMVF4", Tong:"10000", Khadung:"10000", MuaChoVe:"10000", BanChoGiao:"10000"},
	         {MaCCQ:"SIFM", Tong:"3000", Khadung:"3000", MuaChoVe:"3000", BanChoGiao:"3000"}
	       ]

		   };
			 var data2={
 	 		     infAccount:{
 	 					 				 Id:1,
 	 							     Name:"Nguyễn thi Xuân",
 	 							     SoDKSH:"1s2s22"
 	 				 },
 	 				 listMoney : [
 	 	         {MaCCQ:"VFMTF13", Tong:"8000", Khadung:"9000", MuaChoVe:"5000", BanChoGiao:"5000"},
 	 	         {MaCCQ:"VF44", Tong:"10000", Khadung:"10000", MuaChoVe:"10000", BanChoGiao:"10000"},
 	 	         {MaCCQ:"SIFSM", Tong:"3000", Khadung:"3000", MuaChoVe:"3000", BanChoGiao:"3000"}
 	 	       ]

 	 		   };
		if(id==1){

			return res.send(data1);
		}
		else{

			return res.send(data2);
		}

	},
	'add':function(req,res){
		   var data ={id:2,name:'Xuân Trinh',email:'a',role:'nhanvien'}

           console.log('add user');
		   User.create(data).exec(function(err,au){
			if(err){

		      res.send(401,"lỗi thêm authorize");

			 //return  res.send(err)
			}

			res.send(au);


		});



       res.end();
	},
	'getInfAccount':function(req,res,next){
		var {id} = req.body;

		var data2={
			          SoCMTND:"125750111",
								NgayCap:"19-04-1995",
								NoiCap:"Bắc Ninh",
								TenNguoiDuocUQ:"Trịnh Đức Bảo Linh",
								DiaChi:"Bắc Ninh"
							}





				var data1={
	 	 			          SoCMTND:"111111111",
	 	 								NgayCap:"19-04-1995",
	 	 								NoiCap:"Bắc Ninh",
	 	 								TenNguoiDuocUQ:"Trịnh Đức Bảo Linh",
										DiaChi:"Hà Nội"
			 	 				}
		if(id==1){

			return res.send(data2);
		}
		else{

			return res.send(data1);
		}

	},
	'search':function(req,res,next){
		var {shtk,dksh,sl} = req.body;

	 var list1 = [
		 {Identifier:"1", DKSH:"20132323",Place:"Bắc giang", CustomerName:"s Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
		 {Identifier:"2", DKSH:"14021996",Place:"Hà Tĩnh", CustomerName:"s đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"}
	 ];
	 var list2 = [
		 {Identifier:"1", DKSH:"20132323" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
		 {Identifier:"2", DKSH:"14021996" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
		 {Identifier:"3", DKSH:"20132323" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
		{Identifier:"4", DKSH:"14021996" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"}
	 ];
		if(shtk=="20132323"){

			return res.send(list1);
		}
		else{
			
			return res.send(list2);
		}

	},
	'getAll_AcountClose':function(req,res,next){
		 sails.log.info('getAll_AcountClose');
		var listCustomerInfo = [
			{Identifier:"1", DKSH:"20132323" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"2", DKSH:"14021996" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"3", DKSH:"12222222" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"4", DKSH:"44444444" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"5", DKSH:"55555555" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"6", DKSH:"16666696" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"7", DKSH:"77777777" ,Place:"Hà Nội", CustomerName:"Anna Baby", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"},
			{Identifier:"8", DKSH:"45554544" ,Place:"Hà Tĩnh", CustomerName:"Trịnh đức Bảo Linh", CustomerType:"VIP", Start: "08-07-2017",State:"Pending"}
		];
		res.send(listCustomerInfo);
	}
};
