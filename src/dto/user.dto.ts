import { IsString, MinLength } from "class-validator";
import { Expose, Exclude } from "class-transformer";

export class CreateUserDTO {
  @IsString()
  @MinLength(6)
  username!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}

export class CreateUserResponseDTO {
  @Expose() id!: number;

  @Expose() username!: string;

  @Expose() createdAt!: Date;

  @Exclude() password?: string;
}
