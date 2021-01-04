import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() member:Member;

  constructor(private memberService:MemberService,private toastr:ToastrService,
    public presence:PresenceService) { }

  ngOnInit(): void {
  }

  addLike(member:Member){
    this.memberService.addLike(member.username).subscribe(()=>{
      this.toastr.success("You have liked "+ member.knownAs);
    })
  }

}
