package com.multi.FM.booth;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.multi.FM.myboothpage.BoothVO;

@Repository
public class BoothDAO {
  @Autowired
  SqlSessionTemplate my;

  public BoothVO detail(BoothVO boothVO) {
    return my.selectOne("booth.detail", boothVO);
  }
  
  public List<BoothProductVO> product() {
    return my.selectList("booth.product");
  }

  

}
