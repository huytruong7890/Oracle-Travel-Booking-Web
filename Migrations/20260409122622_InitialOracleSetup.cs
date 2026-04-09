using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webtour.Migrations
{
    /// <inheritdoc />
    public partial class InitialOracleSetup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tours",
                columns: table => new
                {
                    Id = table.Column<int>(type: "NUMBER(10)", nullable: false)
                        .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1"),
                    Destination = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    DurationDays = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    DurationNights = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    Attractions = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    PriceIndividual = table.Column<decimal>(type: "NUMBER(18,2)", nullable: false),
                    PriceGroup = table.Column<decimal>(type: "NUMBER(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tours", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BOOKINGS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "NUMBER(10)", nullable: false)
                        .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1"),
                    TOUR_ID = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    NUMBER_OF_PEOPLE = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    IS_GROUP = table.Column<int>(type: "NUMBER(10)", nullable: false),
                    TOTAL_PRICE = table.Column<decimal>(type: "NUMBER(18,2)", nullable: false),
                    CUSTOMER_NAME = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    CUSTOMER_EMAIL = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    BOOKING_DATE = table.Column<DateTime>(type: "TIMESTAMP(7)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BOOKINGS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BOOKINGS_Tours_TOUR_ID",
                        column: x => x.TOUR_ID,
                        principalTable: "Tours",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BOOKINGS_TOUR_ID",
                table: "BOOKINGS",
                column: "TOUR_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BOOKINGS");

            migrationBuilder.DropTable(
                name: "Tours");
        }
    }
}
