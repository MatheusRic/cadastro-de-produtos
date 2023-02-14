import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("city")
class City {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  id_ibge: number;

  @Column()
  name: string;
}

export default City;
