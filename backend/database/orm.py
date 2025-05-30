from sqlalchemy import text, insert, select, or_, and_, BigInteger, cast, case, func
from database.db import async_engine, async_session_factory, Base
from database import models
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from copy import deepcopy


async def create_table():
    async_engine.echo = False
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    async_engine.echo = False

    


async def insert_data():
    async with async_session_factory() as session:
        session: AsyncSession

        

        badge = models.BadgeORM(
            icon="fa-solid fa-seedling",
            title="ПростоПУМовец",
            description="Участник ПростоПУМа, один из отцов основателей NERDS"
        )

        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )

        user = models.UserORM(
            id=1,
            name = "Граф Бомбус Дэбчанский",
            realName = "Авраменко Антон",
            joinDate = "31.05.2025",
            telegram = "Boberus",
            telegramLink = "https://t.me/Boberus",
            avatar = "https://i.ibb.co/qLZBzB0H/ef8f41a307b4.png",
            idNumber = "01",
            idBinary = "1110",
            no_az_date = "01.09.2022",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Граф Бомбус — сочетание точной логики и творческого подхода... Владеет глубокими знаниями в области математики, физики и программирования...Его подход — это баланс аналитики и креатива..."
        )
        session.add(user)

        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )

        user = models.UserORM(
            id=2,
            name = "Президент",
            realName = "Береговой Лев",
            joinDate = "31.05.2025",
            telegram = "LevBeregovoy",
            telegramLink = "https://t.me/LevBeregovoy",
            avatar = "https://i.ibb.co/gZtJgJMv/07866d7b0957.png",
            idNumber = "02",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Лев Береговой"
        )
        session.add(user)

        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=3,
            name = "Дак Долька",
            realName = "Долинов Андрей",
            joinDate = "31.05.2025",
            telegram = "dak_dolka",
            telegramLink = "https://t.me/dak_dolka",
            avatar = "https://i.ibb.co/G4jqm9mW/b698c354fd37.png",
            idNumber = "03",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Дак Долька"
        )
        session.add(user)

        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=4,
            name = "Днёк",
            realName = "Федоров Олег",
            joinDate = "31.05.2025",
            telegram = "OlegFedor0v",
            telegramLink = "https://t.me/OlegFedor0v",
            avatar = "https://i.ibb.co/ch2BXKtm/ef7610ecacd6.png",
            idNumber = "04",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Днёк"
        )
        session.add(user)

        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=5,
            name = "Алёксис",
            realName = "Латушкин Леша",
            joinDate = "31.05.2025",
            telegram = "arm_et_tut",
            telegramLink = "https://t.me/arm_et_tut",
            avatar = "https://i.ibb.co/Xk2Yh6sN/f7a9f8fe0a4d.png",
            idNumber = "05",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Алёксис"
        )
        session.add(user)


        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=6, 
            name = "Артемида",
            realName = "Маркелов Артем",
            joinDate = "31.05.2025",
            telegram = "markelovartemmai",
            telegramLink = "https://t.me/markelovartemmai",
            avatar = "https://i.ibb.co/SXfJJYb4/bc8d01a36b34.png",
            idNumber = "06",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Артемида"
        )
        session.add(user)


        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=7, 
            name = "Bombillius",
            realName = "Замолодчиков Леша",
            joinDate = "31.05.2025",
            telegram = "Derivomy",
            telegramLink = "https://t.me/Derivomy",
            avatar = "https://i.ibb.co/gbNS02Fb/e15a25818379.png",
            idNumber = "07",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "Bombillius"
        )
        session.add(user)


        math_skill = models.SkillORM(
            name="Математика",
            icon="fas fa-square-root-alt",
            value=10
        )

        physics_skill = models.SkillORM(
            name="Физика",
            icon="fas fa-atom",
            value=10
        )

        programming_skill = models.SkillORM(
            name="Программирование",
            icon="fas fa-code",
            value=10
        )

        teamwork_skill = models.SkillORM(
            name="Командная работа",
            icon="fas fa-users-cog",
            value=10
        )
        user = models.UserORM(
            id=8,
            name = "АйДаТаЛяН",
            realName = "Печерский Толя",
            joinDate = "31.05.2025",
            telegram = "CooperYankel",
            telegramLink = "https://t.me/CooperYankel",
            avatar = "https://i.ibb.co/hxD3dp2g/12a7e6708a74.png",
            idNumber = "08",
            idBinary = "1110",
            no_az_date = "01.02.2025",
            level = 7,
            levelProgress = 65,
            moodLevel = 5,
            energyLevel = 5,
            badges = [badge],
            skills = [math_skill, physics_skill, programming_skill, teamwork_skill],
            bio = "АйДаТаЛяН"
        )
        session.add(user)


        await session.commit()

