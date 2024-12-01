// 假设我们有以下运动队数据
const teams = [
    { name: 'Lakers', city: 'Los Angeles', sport: 'Basketball' },
    { name: 'Yankees', city: 'New York', sport: 'Baseball' },
    { name: 'Dolphins', city: 'Miami', sport: 'Football' },
    { name: 'Warriors', city: 'San Francisco', sport: 'Basketball' },
    { name: 'Red Sox', city: 'Boston', sport: 'Baseball' },
    { name: 'Packers', city: 'Green Bay', sport: 'Football' },
  ];
  
  // 冻结数据，防止修改
  Object.freeze(teams);
  
  // 默认过滤所有数据
  let filteredTeams = [...teams];
  
  // 获取DOM元素
  const teamCardsContainer = document.getElementById('teamCardsContainer');
  const sportFilter = document.getElementById('sportFilter');
  
  // 显示所有卡片
  function displayTeams(teamsToDisplay) {
    teamCardsContainer.innerHTML = ''; // 清空现有内容
    teamsToDisplay.forEach(team => {
      const card = document.createElement('div');
      card.classList.add('team-card');
      card.innerHTML = `
        <h2>${team.name}</h2>
        <p>City: ${team.city}</p>
        <p>Sport: ${team.sport}</p>
      `;
      teamCardsContainer.appendChild(card);
    });
  }
  
  // 处理筛选
  function handleFilterChange() {
    const selectedSport = sportFilter.value;
    if (selectedSport === 'all') {
      filteredTeams = [...teams]; // 显示所有数据
    } else {
      filteredTeams = teams.filter(team => team.sport === selectedSport); // 根据运动类型过滤
    }
    displayTeams(filteredTeams);
  }
  
  // 初始显示所有卡片
  displayTeams(filteredTeams);
  
  // 监听筛选器变化
  sportFilter.addEventListener('change', handleFilterChange);
  