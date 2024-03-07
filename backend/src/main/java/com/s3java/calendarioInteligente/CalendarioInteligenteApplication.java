package com.s3java.calendarioInteligente;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.CommonAttribute;
import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.services.impl.ClientServiceImpl;
import com.s3java.calendarioInteligente.services.impl.CompanyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CalendarioInteligenteApplication implements CommandLineRunner {


	public static void main(String[] args) {
		SpringApplication.run(CalendarioInteligenteApplication.class, args);
	}


	@Value("${spring.jpa.hibernate.ddl-auto}")
	private String dbInstruction;

	@Autowired
	private ClientServiceImpl clientService;

	@Autowired
	private CompanyServiceImpl companyService;


	@Override
	public void run(String... args) {
		if(dbInstruction.equals("create-drop")) {

			Company company1 = create("El Bar Llamarada", "ebrio_barney@homero.com", "Avenida siempre falsa 123", "123456789", "123456");
			Company company2 = create("TechSolutions", "info@techsolutions.com", "123 Main Street", "000 000 0000", "123456");
			Company company3 = create("InnovateCorp", "contact@innovatecorp.com", "456 Elm Street", "000 000 0000", "123456");
			Company company4 = create("SmartTech", "support@smarttech.com", "789 Oak Street", "000 000 0000", "123456");
			Company company5 = create("Global Enterprises", "info@globale.com", "321 Pine Street", "000 000 0000", "123456");
			Company company6 = create("BrightFutures", "contact@brightfutures.com", "654 Maple Street", "000 000 0000", "123456");
			Company company7 = create("Nexus Solutions", "info@nexusolutions.com", "987 Cedar Street", "000 000 0000", "123456");
			Company company8 = create("Elite Innovations", "info@eliteinnov.com", "753 Birch Street", "000 000 0000", "123456");
			Company company9 = create("Strategic Partners", "contact@strategicpart.com", "852 Cherry Street", "000 000 0000", "123456");
			Company company10 = create("Apex Solutions", "info@apexsol.com", "369 Spruce Street", "000 000 0000", "123456");
			Company company11 = create("Synergy Enterprises", "contact@synergyent.com", "147 Laurel Street", "000 000 0000", "123456");
			Company company12 = create("Precision Solutions", "info@precisionsol.com", "258 Ash Street", "000 000 0000", "123456");
			Company company13 = create("Infinity Technologies", "contact@infinitytech.com", "963 Poplar Street", "000 000 0000", "123456");
			Company company14 = create("Agile Innovations", "info@agileinnov.com", "741 Sycamore Street", "000 000 0000", "123456");
			Company company15 = create("Visionary Ventures", "contact@visionaryven.com", "852 Willow Street", "000 000 0000", "123456");
			Company company16 = create("Skyline Solutions", "info@skyline.com", "123 High Street", "000 000 0000", "123456");
			Company company17 = create("Golden Gate Enterprises", "contact@goldengate.com", "456 Sunset Boulevard", "000 000 0000", "123456");
			Company company18 = create("BlueWave Innovations", "info@bluewave.com", "789 Ocean Avenue", "000 000 0000", "123456");
			Company company19 = create("SilverStone Tech", "contact@silverstone.com", "321 River Road", "000 000 0000", "123456");
			Company company20 = create("Sunrise Solutions", "info@sunrisesol.com", "654 Sunrise Avenue", "000 000 0000", "123456");
			Company company21 = create("Summit Strategies", "contact@summitstrat.com", "987 Summit Street", "000 000 0000", "123456");
			Company company22 = create("Pinnacle Partners", "info@pinnaclepart.com", "210 Pinnacle Drive", "000 000 0000", "123456");
			Company company23 = create("Emerald Enterprises", "contact@emeraldent.com", "753 Emerald Lane", "000 000 0000", "123456");
			Company company24 = create("AmberTech Solutions", "info@ambertechsol.com", "852 Amber Drive", "000 000 0000", "123456");
			Company company25 = create("Crystal Clear Innovations", "contact@crystalclear.com", "369 Crystal Court", "000 000 0000", "123456");
			Company company26 = create("Platinum Partnerships", "info@platinumpart.com", "147 Platinum Place", "000 000 0000", "123456");
			Company company27 = create("DiamondTech Solutions", "contact@diamondtech.com", "258 Diamond Drive", "000 000 0000", "123456");
			Company company28 = create("Sapphire Enterprises", "info@sapphireent.com", "963 Sapphire Street", "000 000 0000", "123456");
			Company company29 = create("Ruby Red Innovations", "contact@rubyred.com", "741 Ruby Road", "000 000 0000", "123456");
			Company company30 = create("TopazTech Solutions", "info@topaztech.com", "852 Topaz Terrace", "000 000 0000", "123456");

			createClientAddToCompany( "Client Name 1", "client@example.com1", "Adress 1", "0123 456 789", "123456", company1 );
			createClientAddToCompany( "Client Name 2", "client@example.com2", "Adress 1", "0123 456 789", "123456", company2 );
			createClientAddToCompany( "Client Name 3", "client@example.com3", "Adress 1", "0123 456 789", "123456", company3 );
			createClientAddToCompany( "Client Name 4", "client@example.com4", "Adress 1", "0123 456 789", "123456", company4 );
			createClientAddToCompany( "Client Name 5", "client@example.com5", "Adress 1", "0123 456 789", "123456", company5 );
			createClientAddToCompany( "Client Name 6", "client@example.com6", "Adress 1", "0123 456 789", "123456", company6 );
			createClientAddToCompany( "Client Name 7", "client@example.com7", "Adress 1", "0123 456 789", "123456", company7 );
			createClientAddToCompany( "Client Name 8", "client@example.com8", "Adress 1", "0123 456 789", "123456", company8 );
			createClientAddToCompany( "Client Name 9", "client@example.com9", "Adress 1", "0123 456 789", "123456", company9 );
			createClientAddToCompany( "Client Name 10", "client@example.com10", "Adress 1", "0123 456 789", "123456", company10 );
			createClientAddToCompany( "Client Name 11", "client@example.com11", "Adress 1", "0123 456 789", "123456", company11 );
			createClientAddToCompany( "Client Name 12", "client@example.com12", "Adress 1", "0123 456 789", "123456", company12 );
			createClientAddToCompany( "Client Name 13", "client@example.com13", "Adress 1", "0123 456 789", "123456", company13 );
			createClientAddToCompany( "Client Name 14", "client@example.com14", "Adress 1", "0123 456 789", "123456", company14 );
			createClientAddToCompany( "Client Name 15", "client@example.com15", "Adress 1", "0123 456 789", "123456", company15 );
			createClientAddToCompany( "Client Name 16", "client@example.com16", "Adress 1", "0123 456 789", "123456", company16 );
			createClientAddToCompany( "Client Name 17", "client@example.com17", "Adress 1", "0123 456 789", "123456", company17 );
			createClientAddToCompany( "Client Name 18", "client@example.com18", "Adress 1", "0123 456 789", "123456", company18 );
			createClientAddToCompany( "Client Name 19", "client@example.com19", "Adress 1", "0123 456 789", "123456", company19 );
			createClientAddToCompany( "Client Name 20", "client@example.com20", "Adress 1", "0123 456 789", "123456", company20 );
			createClientAddToCompany( "Client Name 21", "client@example.com21", "Adress 1", "0123 456 789", "123456", company21 );
			createClientAddToCompany( "Client Name 22", "client@example.com22", "Adress 1", "0123 456 789", "123456", company22 );
			createClientAddToCompany( "Client Name 23", "client@example.com23", "Adress 1", "0123 456 789", "123456", company23 );
			createClientAddToCompany( "Client Name 24", "client@example.com24", "Adress 1", "0123 456 789", "123456", company24 );
			createClientAddToCompany( "Client Name 25", "client@example.com25", "Adress 1", "0123 456 789", "123456", company25 );
			createClientAddToCompany( "Client Name 26", "client@example.com26", "Adress 1", "0123 456 789", "123456", company26 );
			createClientAddToCompany( "Client Name 27", "client@example.com27", "Adress 1", "0123 456 789", "123456", company27 );
			createClientAddToCompany( "Client Name 28", "client@example.com28", "Adress 1", "0123 456 789", "123456", company28 );
			createClientAddToCompany( "Client Name 29", "client@example.com29", "Adress 1", "0123 456 789", "123456", company29 );
			createClientAddToCompany( "Client Name 30", "client@example.com30", "Adress 1", "0123 456 789", "123456", company30 );
		}
	}


	/**
	 * Crea y guarda una compañía con los datos proporcionados.
	 * */
	private Company create(String name, String email, String address, String phone, String password)  {
		CommonAttribute cCompany1 = new CommonAttribute();
		cCompany1.setName(name);
		cCompany1.setEmail(email);
		cCompany1.setAddress(address);
		cCompany1.setPhone(phone);
		cCompany1.setPassword(new BCryptPasswordEncoder().encode(password));
		Company c = new Company();
		c.setCommonAttribute(cCompany1);
		companyService.save(c);
		return c;
	}

	private static CommonAttribute getAttribute(String name, String email, String address, String phone, String password) {
		CommonAttribute commonAttribute = new CommonAttribute();
		commonAttribute.setName(name);
		commonAttribute.setEmail(email);
		commonAttribute.setAddress(address);
		commonAttribute.setPhone(phone);
		commonAttribute.setPassword(new BCryptPasswordEncoder().encode(password));
		return commonAttribute;
	}

	/**
	 * Crea un cliente y lo guarda en la database
	 * */
	private void createClient(String name,String email, String address, String phone, String password ) {
		CommonAttribute commonAttribute = getAttribute(name, email, address, phone, password);
		Client client = new Client();
		client.setCommonAttribute(commonAttribute);
		clientService.create(client);
	}

	/**
	 * Crea un cliente y lo guarda en la database, pero relacionandolo con una compañía previamente creada.
	 * */
	private void createClientAddToCompany(String name,String email, String address, String phone, String password, Company company ) {
		CommonAttribute commonAttribute = getAttribute(name, email, address, phone, password);
		Client client = new Client();
		client.setCommonAttribute(commonAttribute);
		client.setCompany(company);
		clientService.create(client);
	}
}
