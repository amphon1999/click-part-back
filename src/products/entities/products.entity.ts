
import { Categories } from 'src/categories/entities/categories.entity';
import { Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class Products {



    @PrimaryGeneratedColumn()
    ProductsId: number;
  
    @Column() //ชื่อสินค้า
    ProductsName : string;

    @Column() //รายละเอียดสินค้า
    Description: string;
  
    @Column() //ยี่ห้อสินค้า
    Brand: string;

    @Column() //ประเภทสินค้า
    ItemGroup: string;
  
    @Column() //รหัสสินค้า
    SKU : string;

    @Column()   //ราคาตั้ง
    ST_Price: number;
  
    @Column()  //ราคาขาย
    SL_Price: number;
  
    @Column() //จำนวนสินค้า
    Stock: number;
  
    @Column() //น้ำหนักสินค้า
    Weight: number;
    
    @Column()  // ความกว้าง
    Wide: number;

    @Column() // ความยาว
    Long : number;

    @Column() // ความสูง
    High : number;

    @Column() //catid
    Cat_Id: number;
  
  
}  
